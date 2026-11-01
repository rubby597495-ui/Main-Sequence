import { launchBrowser, testBase } from './browser.mjs';

const browser = await launchBrowser();
const results = [];

for (const width of [390, 1440]) {
  const context = await browser.newContext({
    viewport: { width, height: 950 },
    javaScriptEnabled: false,
  });
  const page = await context.newPage();
  await page.goto(`${testBase}/release-date/`, { waitUntil: 'networkidle' });
  results.push({
    width,
    h1: await page.locator('h1').innerText(),
    navLinks: await page.locator('nav[aria-label="Primary"] a').count(),
    tables: await page.locator('table').count(),
    paragraphs: await page.locator('main p').count(),
    canonical: await page.locator('link[rel="canonical"]').getAttribute('href'),
  });
  await context.close();
}

await browser.close();
console.log(JSON.stringify(results, null, 2));
if (
  results.some(
    (result) =>
      !result.h1 ||
      result.navLinks < 6 ||
      result.tables < 1 ||
      result.paragraphs < 5,
  )
) {
  process.exitCode = 1;
}
