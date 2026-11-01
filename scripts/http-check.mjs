const local = process.argv[2] || 'http://127.0.0.1:4321';
const origin = 'https://mainsequenceguide.wiki';
const errors = [];

const check = async (pathname, expected = 200) => {
  const response = await fetch(`${local}${pathname}`, {
    redirect: 'manual',
  });
  if (response.status !== expected) {
    errors.push(`${pathname}: HTTP ${response.status}, expected ${expected}`);
  }
  return response;
};

const index = await (await check('/sitemap-index.xml')).text();
const sitemapName = index.match(/<loc>(.*?sitemap-0\.xml)<\/loc>/)?.[1];
if (!sitemapName) {
  errors.push('Could not find sitemap-0.xml in sitemap index');
} else {
  const sitemapUrl = sitemapName.replace(origin, local);
  const sitemapResponse = await fetch(sitemapUrl);
  if (sitemapResponse.status !== 200) {
    errors.push(`sitemap-0.xml: HTTP ${sitemapResponse.status}`);
  }
  const sitemap = await sitemapResponse.text();
  const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(
    (match) => match[1],
  );
  for (const url of urls) {
    const pathname = new URL(url).pathname;
    const response = await check(pathname);
    const text = await response.text();
    if (!text.includes('</html>')) errors.push(`${pathname}: not an HTML page`);
  }
  console.log(`Checked ${urls.length} sitemap URLs.`);
}

await check('/robots.txt');
await check('/site.webmanifest');
await check('/icons/mark.svg');

const missing = await check('/this-page-does-not-exist', 404);
const missingBody = await missing.text();
if (!missingBody.includes('Signal lost')) {
  errors.push('Missing page did not return the custom 404 page');
}
if (!missingBody.includes('noindex')) {
  errors.push('Custom 404 page is missing noindex meta');
}

const noSlash = await fetch(`${local}/game`, { redirect: 'manual' });
if (![301, 302, 307, 308].includes(noSlash.status)) {
  errors.push(`/game without slash returned ${noSlash.status}, expected redirect`);
}

console.log(JSON.stringify({ errors }, null, 2));
if (errors.length) process.exitCode = 1;
