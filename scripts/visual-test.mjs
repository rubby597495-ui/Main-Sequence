import { mkdir } from 'node:fs/promises';
import path from 'node:path';
import { launchBrowser, testBase } from './browser.mjs';

const base = testBase;
const canonicalOrigin = 'https://mainsequenceguide.wiki';
const outDir = path.join(process.cwd(), 'research', 'visual');
await mkdir(outDir, { recursive: true });

const browser = await launchBrowser();

const allErrors = [];
let pagesAudited = 0;

const routes = [
  '/',
  '/game/',
  '/release-date/',
  '/demo/',
  '/beginner-guide/',
  '/guides/',
  '/guides/first-station-logistics/',
  '/guides/factory-layout/',
  '/guides/co-op/',
  '/guides/ship-design/',
  '/guides/combat-defense/',
  '/database/',
  '/database/resources/',
  '/database/modules/',
  '/database/research/',
  '/updates/',
  '/tools/',
  '/tools/launch-timer/',
  '/tools/demo-checklist/',
  '/about/',
  '/editorial-policy/',
  '/sources/',
  '/contact/',
  '/privacy/',
  '/404/',
];

const loadAllImages = async (page) => {
  await page.evaluate(async () => {
    const images = [...document.images];
    images.forEach((image) => {
      image.loading = 'eager';
    });
    await Promise.all(
      images.map((image) => {
        if (image.complete) return Promise.resolve();
        return new Promise((resolve) => {
          image.addEventListener('load', resolve, { once: true });
          image.addEventListener('error', resolve, { once: true });
        });
      }),
    );
  });
};

const audit = async (page, route) => {
  const data = await page.evaluate(() => {
    const h1 = [...document.querySelectorAll('h1')];
    const descriptions = [...document.querySelectorAll('meta[name="description"]')];
    const canonicals = [...document.querySelectorAll('link[rel="canonical"]')];
    const jsonLd = [...document.querySelectorAll('script[type="application/ld+json"]')];
    const ids = [...document.querySelectorAll('[id]')].map((node) => node.id);
    const duplicateIds = ids.filter((id, index) => ids.indexOf(id) !== index);
    const brokenImages = [...document.images]
      .filter((img) => !img.complete || img.naturalWidth === 0)
      .map((img) => img.currentSrc || img.src);
    const overflow = document.documentElement.scrollWidth > window.innerWidth + 1;
    let jsonLdError = null;
    try {
      jsonLd.forEach((script) => JSON.parse(script.textContent || ''));
    } catch (error) {
      jsonLdError = String(error);
    }
    return {
      title: document.title,
      h1Count: h1.length,
      h1: h1.map((node) => node.textContent.trim()),
      descriptionCount: descriptions.length,
      descriptionLength: descriptions[0]?.content.length ?? 0,
      description: descriptions[0]?.content ?? '',
      canonical: canonicals[0]?.href ?? null,
      jsonLdCount: jsonLd.length,
      jsonLdError,
      duplicateIds: [...new Set(duplicateIds)],
      brokenImages,
      overflow,
    };
  });

  const expectedPath = `${route.endsWith('/') ? route : `${route}/`}`;
  if (data.title.length < 15 || data.title.length > 75) {
    allErrors.push(`${route}: title length ${data.title.length}`);
  }
  if (data.h1Count !== 1) allErrors.push(`${route}: ${data.h1Count} H1 elements`);
  if (data.descriptionCount !== 1) {
    allErrors.push(`${route}: ${data.descriptionCount} meta descriptions`);
  }
  if (data.descriptionLength < 70 || data.descriptionLength > 170) {
    allErrors.push(`${route}: description length ${data.descriptionLength}`);
  }
  if (!data.canonical) {
    allErrors.push(`${route}: no canonical`);
  } else {
    const canonicalUrl = new URL(data.canonical);
    if (canonicalUrl.origin !== canonicalOrigin) {
      allErrors.push(`${route}: canonical origin ${canonicalUrl.origin}`);
    }
    if (canonicalUrl.pathname !== expectedPath) {
      allErrors.push(`${route}: canonical path ${canonicalUrl.pathname} expected ${expectedPath}`);
    }
  }
  if (data.jsonLdError) allErrors.push(`${route}: JSON-LD ${data.jsonLdError}`);
  if (data.duplicateIds.length) {
    allErrors.push(`${route}: duplicate ids ${data.duplicateIds.join(', ')}`);
  }
  if (data.brokenImages.length) {
    allErrors.push(`${route}: broken images ${data.brokenImages.join(', ')}`);
  }
  if (data.overflow) allErrors.push(`${route}: horizontal overflow`);

  pagesAudited += 1;
  return data;
};

for (const route of routes) {
  const context = await browser.newContext({
    viewport: { width: 1440, height: 1000 },
    deviceScaleFactor: 1,
  });
  const page = await context.newPage();
  const consoleErrors = [];
  const pageErrors = [];
  page.on('console', (message) => {
    if (message.type() === 'error') consoleErrors.push(message.text());
  });
  page.on('pageerror', (error) => pageErrors.push(String(error)));

  await page.goto(`${base}${route}`, { waitUntil: 'networkidle' });
  await loadAllImages(page);
  await audit(page, route);

  if (consoleErrors.length) {
    allErrors.push(`${route}: console errors ${consoleErrors.join(' | ')}`);
  }
  if (pageErrors.length) {
    allErrors.push(`${route}: page errors ${pageErrors.join(' | ')}`);
  }

  if (
    ['/', '/guides/', '/database/modules/', '/guides/co-op/', '/tools/demo-checklist/'].includes(
      route,
    )
  ) {
    await page.screenshot({
      path: path.join(
        outDir,
        `desktop${route.replaceAll('/', '-') || '-home'}.jpg`,
      ),
      fullPage: false,
      type: 'jpeg',
      quality: 80,
    });
    if (route === '/database/modules/') {
      await page.locator('#entries').scrollIntoViewIfNeeded();
      await page.screenshot({
        path: path.join(outDir, 'desktop-modules-table.jpg'),
        fullPage: false,
        type: 'jpeg',
        quality: 80,
      });
    }
    if (route === '/guides/co-op/') {
      await page.locator('#crew-planner').scrollIntoViewIfNeeded();
      await page.locator('[data-crew-planner]').screenshot({
        path: path.join(outDir, 'desktop-crew-planner.jpg'),
        type: 'jpeg',
        quality: 80,
      });
    }
  }

  await context.close();
}

const mobileRoutes = [
  { route: '/', anchor: null, name: 'home-top' },
  { route: '/beginner-guide/', anchor: '#station', name: 'beginner-station' },
  { route: '/database/modules/', anchor: '#entries', name: 'modules-table' },
  { route: '/guides/co-op/', anchor: '#crew-planner', name: 'coop-planner' },
  {
    route: '/tools/demo-checklist/',
    anchor: '#checklist-demo-basics',
    name: 'checklist-mid',
  },
];

for (const test of mobileRoutes) {
  const context = await browser.newContext({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
  });
  const page = await context.newPage();
  const errors = [];
  page.on('pageerror', (error) => errors.push(String(error)));
  await page.goto(`${base}${test.route}`, { waitUntil: 'networkidle' });
  await loadAllImages(page);
  const data = await audit(page, test.route);

  if (data.overflow) {
    const offenders = await page.evaluate(() =>
      [...document.querySelectorAll('body *')]
        .filter((node) => {
          const rect = node.getBoundingClientRect();
          return (
            rect.width > window.innerWidth + 1 &&
            getComputedStyle(node).position !== 'fixed'
          );
        })
        .slice(0, 10)
        .map((node) => `${node.tagName}.${String(node.className).slice(0, 80)}`)
    );
    allErrors.push(
      `${test.route} mobile: overflow offenders ${offenders.join(' | ')}`,
    );
  }
  if (errors.length) allErrors.push(`${test.route} mobile: ${errors.join(' | ')}`);

  if (test.anchor) {
    await page.locator(test.anchor).scrollIntoViewIfNeeded();
  }
  await page.screenshot({
    path: path.join(outDir, `mobile-${test.name}.jpg`),
    fullPage: false,
    type: 'jpeg',
    quality: 80,
  });
  await context.close();
}

// Tablet checks
const tabletRoutes = ['/', '/release-date/', '/database/modules/', '/guides/co-op/'];
for (const width of [768, 1024]) {
  for (const route of tabletRoutes) {
    const context = await browser.newContext({
      viewport: { width, height: 900 },
      deviceScaleFactor: 1,
    });
    const page = await context.newPage();
    const errors = [];
    page.on('pageerror', (error) => errors.push(String(error)));
    await page.goto(`${base}${route}`, { waitUntil: 'networkidle' });
    await loadAllImages(page);
    const data = await audit(page, route);
    if (data.overflow) {
      allErrors.push(`${route} tablet ${width}: horizontal overflow`);
    }
    if (errors.length) {
      allErrors.push(`${route} tablet ${width}: ${errors.join(' | ')}`);
    }
    await context.close();
  }
}

// Mobile menu
const mobileContext = await browser.newContext({
  viewport: { width: 390, height: 844 },
  deviceScaleFactor: 2,
  isMobile: true,
  hasTouch: true,
});
const mobilePage = await mobileContext.newPage();
await mobilePage.goto(base, { waitUntil: 'networkidle' });
await mobilePage.locator('[data-menu-toggle]').click();
const menuOpen = await mobilePage.evaluate(() => ({
  expanded: document
    .querySelector('[data-menu-toggle]')
    ?.getAttribute('aria-expanded'),
  hidden:
    getComputedStyle(document.getElementById('site-nav-panel')).display ===
    'none',
}));
if (menuOpen.expanded !== 'true' || menuOpen.hidden) {
  allErrors.push(`mobile menu did not open: ${JSON.stringify(menuOpen)}`);
}
await mobilePage.screenshot({
  path: path.join(outDir, 'mobile-menu-open.jpg'),
  type: 'jpeg',
  quality: 80,
});
await mobilePage.locator('[data-menu-toggle]').click();
await mobileContext.close();

// Interaction tests
const context = await browser.newContext({
  viewport: { width: 1440, height: 1000 },
});
const page = await context.newPage();

await page.goto(`${base}/tools/launch-timer/`, { waitUntil: 'networkidle' });
const countdown = await page.evaluate(() => ({
  days: document.querySelector('[data-days]')?.textContent,
  local: document.querySelector('[data-countdown-local]')?.textContent,
}));
if (countdown.days === '--' || countdown.days === '00') {
  allErrors.push(`countdown did not initialise: ${JSON.stringify(countdown)}`);
}
if (!countdown.local || countdown.local.includes('calculated in your browser')) {
  allErrors.push('countdown local time did not initialise');
}

await page.goto(`${base}/tools/demo-checklist/`, { waitUntil: 'networkidle' });
await page.locator('[data-check-id="requirements"]').check();
await page.locator('[data-check-id="install-demo"]').check();
await page.reload({ waitUntil: 'networkidle' });
const persisted = await page.evaluate(() => ({
  req: document.querySelector('[data-check-id="requirements"]')?.checked,
  demo: document.querySelector('[data-check-id="install-demo"]')?.checked,
  text: document.querySelector('[data-progress-text]')?.textContent?.trim(),
}));
if (!persisted.req || !persisted.demo || !persisted.text?.startsWith('2 of')) {
  allErrors.push(`checklist persistence failed: ${JSON.stringify(persisted)}`);
}
await page.locator('[data-checklist-reset]').click();
const reset = await page.evaluate(
  () => document.querySelectorAll('[data-check-id]:checked').length,
);
if (reset !== 0) allErrors.push('checklist reset failed');

await page.goto(`${base}/database/resources/`, { waitUntil: 'networkidle' });
await page.locator('[data-filter-value="Science type"]').click();
const filtered = await page.evaluate(() => ({
  visible: [...document.querySelectorAll('#resources-table tbody tr[data-row]')].filter(
    (row) => !row.hidden,
  ).length,
  count: document.querySelector('[data-filter-count]')?.textContent?.trim(),
}));
if (filtered.visible !== 4 || !filtered.count?.startsWith('4 of')) {
  allErrors.push(`resource filter failed: ${JSON.stringify(filtered)}`);
}
await page.locator('[data-filter-value="all"]').click();
await page.locator('[data-filter-search]').fill('cobalt');
const searchCount = await page.evaluate(
  () =>
    [...document.querySelectorAll('#resources-table tbody tr[data-row]')].filter(
      (row) => !row.hidden,
    ).length,
);
if (searchCount < 1) allErrors.push('resource text search failed');

await page.goto(`${base}/guides/co-op/`, { waitUntil: 'networkidle' });
await page.locator('[data-crew-size]').selectOption('4');
await page.locator('[data-crew-generate]').click();
const crewCards = await page.locator('[data-crew-output] article').count();
if (crewCards !== 4) {
  allErrors.push(`crew planner produced ${crewCards} cards instead of 4`);
}
await page.locator('[data-crew-rotate]').click();

await context.close();
await browser.close();

console.log(
  JSON.stringify(
    {
      pagesAudited,
      errors: allErrors,
      countdown,
      persisted,
      filtered,
      crewCards,
      menuOpen,
    },
    null,
    2,
  ),
);
if (allErrors.length) process.exitCode = 1;
