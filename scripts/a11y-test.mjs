import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { launchBrowser, testBase } from './browser.mjs';

const base = testBase;
const axeSource = await readFile(
  path.join(process.cwd(), 'node_modules', 'axe-core', 'axe.min.js'),
  'utf8',
);
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
];

const browser = await launchBrowser();
const results = [];

for (const width of [1440, 390]) {
  for (const route of routes) {
    const context = await browser.newContext({
      viewport: { width, height: width === 390 ? 844 : 1000 },
      isMobile: width === 390,
      hasTouch: width === 390,
      deviceScaleFactor: 1,
    });
    const page = await context.newPage();
    await page.goto(`${base}${route}`, { waitUntil: 'networkidle' });
    await page.addScriptTag({ content: axeSource });
    const scan = await page.evaluate(async () => {
      return await window.axe.run(document, {
        runOnly: {
          type: 'tag',
          values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'],
        },
      });
    });
    const violations = scan.violations.map((violation) => ({
      id: violation.id,
      impact: violation.impact,
      description: violation.description,
      nodes: violation.nodes.slice(0, 5).map((node) => ({
        target: node.target,
        html: node.html,
        failureSummary: node.failureSummary,
      })),
    }));
    if (violations.length) {
      results.push({ width, route, violations });
    }
    await context.close();
  }
}

await browser.close();
console.log(JSON.stringify(results, null, 2));
if (results.length) process.exitCode = 1;
