import * as cheerio from 'cheerio';
import { readFile, readdir, access } from 'node:fs/promises';
import path from 'node:path';
import { SOURCES } from '../src/data/sources.ts';
import { RESOURCES } from '../src/data/resources.ts';
import { MODULES } from '../src/data/modules.ts';
import { RESEARCH_NODES } from '../src/data/research.ts';
import { CHECKLIST } from '../src/data/checklist.ts';
import { UPDATES } from '../src/data/updates.ts';

const dist = path.join(process.cwd(), 'dist');
const origin = 'https://mainsequenceguide.wiki';
const errors = [];
const warnings = [];

const walk = async (dir) => {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...(await walk(full)));
    else files.push(full);
  }
  return files;
};

const allFiles = await walk(dist);
const htmlFiles = allFiles.filter((file) => file.endsWith('.html'));
const pages = [];

const routeForFile = (file) => {
  const rel = path.relative(dist, file).replaceAll('\\', '/');
  if (rel === 'index.html') return '/';
  if (rel === '404.html') return '/404.html';
  if (rel.endsWith('/index.html')) return `/${rel.slice(0, -'index.html'.length)}`;
  return `/${rel}`;
};

for (const file of htmlFiles) {
  const html = await readFile(file, 'utf8');
  const $ = cheerio.load(html);
  const route = routeForFile(file);
  const title = $('title').first().text().trim();
  const description = $('meta[name="description"]').first().attr('content')?.trim() ?? '';
  const canonical = $('link[rel="canonical"]').first().attr('href')?.trim() ?? '';
  const robots = $('meta[name="robots"]').first().attr('content') ?? '';
  const h1 = $('h1');
  const h2 = $('h2');
  const ids = [];
  $('[id]').each((_, element) => ids.push($(element).attr('id')));
  const duplicateIds = [...new Set(ids.filter((id, index) => ids.indexOf(id) !== index))];

  if (!title) errors.push(`${route}: missing title`);
  if (title.length > 75) errors.push(`${route}: title is ${title.length} chars`);
  if (!description) errors.push(`${route}: missing meta description`);
  if (description.length > 170) {
    errors.push(`${route}: description is ${description.length} chars`);
  }
  if (h1.length !== 1) errors.push(`${route}: ${h1.length} H1 elements`);
  if (h2.length === 0) warnings.push(`${route}: no H2 headings`);
  if (route !== '/404.html' && !canonical) errors.push(`${route}: missing canonical`);
  if (route !== '/404.html' && canonical) {
    const url = new URL(canonical);
    if (url.origin !== origin) errors.push(`${route}: canonical origin ${url.origin}`);
    if (url.pathname !== route) {
      errors.push(`${route}: canonical path ${url.pathname} does not match ${route}`);
    }
  }
  if (route === '/404.html' && !robots.includes('noindex')) {
    errors.push('/404: missing noindex');
  }
  if (duplicateIds.length) {
    errors.push(`${route}: duplicate ids: ${duplicateIds.join(', ')}`);
  }

  const internalLinks = [];
  $('a[href]').each((_, element) => {
    const href = $(element).attr('href');
    if (!href) return;
    if (href.startsWith('/') && !href.startsWith('//')) {
      internalLinks.push(href);
    }
  });

  const imageProblems = [];
  $('img').each((_, element) => {
    const alt = $(element).attr('alt');
    const src = $(element).attr('src');
    if (alt === undefined) imageProblems.push(`missing alt for ${src}`);
    if (!src) imageProblems.push('empty image src');
  });

  const jsonLd = [];
  $('script[type="application/ld+json"]').each((_, element) => {
    try {
      jsonLd.push(JSON.parse($(element).html() || ''));
    } catch (error) {
      errors.push(`${route}: JSON-LD parse error ${error}`);
    }
  });

  const graph = jsonLd.flatMap((block) => block['@graph'] ?? [block]);
  const types = graph.map((node) => node['@type']);
  if (!types.includes('Organization')) errors.push(`${route}: missing Organization schema`);
  if (!types.includes('WebSite')) errors.push(`${route}: missing WebSite schema`);
  if (!types.includes('BreadcrumbList') && route !== '/' && route !== '/404.html') {
    errors.push(`${route}: missing BreadcrumbList schema`);
  }
  if (types.includes('FAQPage')) {
    const visibleFaqs = $('#faq details').length;
    const schemaFaqs = graph.find((node) => node['@type'] === 'FAQPage')?.mainEntity?.length ?? 0;
    if (visibleFaqs !== schemaFaqs) {
      errors.push(`${route}: ${visibleFaqs} visible FAQs but ${schemaFaqs} in schema`);
    }
  }

  pages.push({
    file,
    route,
    title,
    description,
    canonical,
    robots,
    h1: h1.length,
    internalLinks,
    imageProblems,
    graph,
    $,
  });
}

const byRoute = new Map(pages.map((page) => [page.route, page]));
const allIds = new Map(
  pages.map((page) => [
    page.route,
    new Set(
      page
        .$('[id]')
        .toArray()
        .map((element) => page.$(element).attr('id')),
    ),
  ]),
);

const pageExists = (route) => {
  const clean = route.split('#')[0].split('?')[0];
  if (clean === '/') return true;
  const candidate = clean.endsWith('/')
    ? path.join(dist, clean.slice(1), 'index.html')
    : path.join(dist, clean.slice(1));
  return allFiles.includes(candidate) || allFiles.includes(path.join(candidate, 'index.html'));
};

for (const page of pages) {
  for (const href of page.internalLinks) {
    const [pathPart, hash] = href.split('#');
    const targetRoute = pathPart || page.route;
    if (!pageExists(targetRoute)) {
      errors.push(`${page.route}: broken internal link ${href}`);
      continue;
    }
    if (hash) {
      const targetFile = pathPart
        ? pageExists(pathPart)
          ? targetRoute
          : null
        : page.route;
      if (targetFile && byRoute.has(targetFile)) {
        if (!allIds.get(targetFile)?.has(hash)) {
          errors.push(`${page.route}: missing anchor target ${href}`);
        }
      }
    }
  }
  if (page.imageProblems.length) {
    errors.push(`${page.route}: image problems ${page.imageProblems.join('; ')}`);
  }
}

// Unique metadata across all pages except the error page.
const indexable = pages.filter((page) => page.route !== '/404.html');
for (const field of ['title', 'description', 'canonical']) {
  const seen = new Map();
  for (const page of indexable) {
    const value = page[field];
    if (!value) continue;
    if (seen.has(value)) {
      errors.push(
        `${page.route}: duplicate ${field} with ${seen.get(value)}`,
      );
    } else {
      seen.set(value, page.route);
    }
  }
}

// Internal reachability from home.
const reachable = new Set(['/']);
const queue = ['/'];
while (queue.length) {
  const route = queue.shift();
  const page = byRoute.get(route);
  if (!page) continue;
  for (const href of page.internalLinks) {
    const pathPart = href.split('#')[0] || route;
    if (!byRoute.has(pathPart) || reachable.has(pathPart)) continue;
    reachable.add(pathPart);
    queue.push(pathPart);
  }
}
for (const page of pages) {
  if (page.route !== '/404.html' && page.route !== '/404/' && !reachable.has(page.route)) {
    errors.push(`${page.route}: page is not reachable from home`);
  }
}

// Sitemap and robots checks.
const robotsTxt = await readFile(path.join(dist, 'robots.txt'), 'utf8');
if (!robotsTxt.includes(`Sitemap: ${origin}/sitemap-index.xml`)) {
  errors.push('robots.txt does not point to the sitemap index');
}
const sitemapIndex = await readFile(path.join(dist, 'sitemap-index.xml'), 'utf8');
if (!sitemapIndex.includes(`${origin}/sitemap-0.xml`)) {
  errors.push('sitemap index does not reference sitemap-0.xml');
}
const sitemapXml = await readFile(path.join(dist, 'sitemap-0.xml'), 'utf8');
const $sitemap = cheerio.load(sitemapXml, { xmlMode: true });
const sitemapUrls = $sitemap('url loc')
  .toArray()
  .map((element) => $sitemap(element).text().trim());
for (const url of sitemapUrls) {
  const urlPath = new URL(url).pathname;
  if (!byRoute.has(urlPath) && urlPath !== '/404/') {
    errors.push(`sitemap: URL has no built page: ${urlPath}`);
  }
  if (urlPath === '/404/') errors.push('sitemap: contains noindex 404 page');
}
for (const page of indexable) {
  if (!sitemapUrls.includes(`${origin}${page.route}`)) {
    errors.push(`${page.route}: missing from sitemap`);
  }
}

// Static image existence.
for (const file of allFiles) {
  if (!file.endsWith('.html')) continue;
  const page = pages.find((item) => item.file === file);
  if (!page) continue;
  const srcs = page
    .$('img[src]')
    .toArray()
    .map((element) => page.$(element).attr('src'));
  for (const src of srcs) {
    if (!src || /^https?:|^data:/.test(src)) continue;
    const clean = src.split('?')[0];
    const imagePath = path.join(dist, clean.slice(1));
    try {
      await access(imagePath);
    } catch {
      errors.push(`${page.route}: image file not found ${src}`);
    }
  }
}

// Source IDs used by data files and page frontmatter must exist in the archive.
const sourceIds = new Set(SOURCES.map((source) => source.id));
const sourceUses = [
  ...RESOURCES.flatMap((item) => item.sourceIds),
  ...MODULES.flatMap((item) => item.sourceIds),
  ...RESEARCH_NODES.flatMap((item) => item.sourceIds),
  ...CHECKLIST.flatMap((item) => item.sourceIds),
  ...UPDATES.map((item) => item.sourceId),
];
const pageDir = path.join(process.cwd(), 'src', 'pages');
const astroFiles = (await walk(pageDir)).filter((file) => file.endsWith('.astro'));
for (const file of astroFiles) {
  const contents = await readFile(file, 'utf8');
  const matches = contents.matchAll(/sourceIds=\{\s*\[([\s\S]*?)\]\s*\}/g);
  for (const match of matches) {
    for (const id of match[1].matchAll(/'([^']+)'/g)) {
      sourceUses.push(id[1]);
    }
  }
}
const unknownSourceIds = [...new Set(sourceUses.filter((id) => !sourceIds.has(id)))];
if (unknownSourceIds.length) {
  errors.push(`Unknown source IDs: ${unknownSourceIds.join(', ')}`);
}

const output = {
  pages: pages.length,
  sitemapEntries: sitemapUrls.length,
  sourceIds: sourceIds.size,
  sourceReferences: sourceUses.length,
  errors,
  warnings,
};
console.log(JSON.stringify(output, null, 2));
if (errors.length) process.exitCode = 1;
