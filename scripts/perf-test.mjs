import { launchBrowser, testBase } from './browser.mjs';

const base = testBase;
const pages = [
  ['home', '/'],
  ['beginner', '/beginner-guide/'],
  ['modules', '/database/modules/'],
  ['co-op', '/guides/co-op/'],
  ['launch-timer', '/tools/launch-timer/'],
  ['demo-checklist', '/tools/demo-checklist/'],
];

const browser = await launchBrowser();
const results = [];

for (const width of [1440, 390]) {
  for (const [name, route] of pages) {
    const context = await browser.newContext({
      viewport: { width, height: width === 390 ? 844 : 1000 },
      isMobile: width === 390,
      hasTouch: width === 390,
      deviceScaleFactor: 1,
    });
    const page = await context.newPage();
    await page.addInitScript(() => {
      window.__perf = { lcp: 0, cls: 0 };
      new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          window.__perf.lcp = entry.startTime;
        }
      }).observe({ type: 'largest-contentful-paint', buffered: true });
      new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!entry.hadRecentInput) window.__perf.cls += entry.value;
        }
      }).observe({ type: 'layout-shift', buffered: true });
    });
    await page.goto(`${base}${route}`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(1200);
    const metrics = await page.evaluate(() => {
      const nav = performance.getEntriesByType('navigation')[0];
      const resources = performance.getEntriesByType('resource');
      const fcp = performance.getEntriesByName('first-contentful-paint')[0];
      const transferBytes = resources.reduce(
        (total, item) => total + (item.transferSize || 0),
        nav?.transferSize || 0,
      );
      return {
        lcp: Math.round(window.__perf?.lcp || 0),
        cls: Number((window.__perf?.cls || 0).toFixed(4)),
        fcp: Math.round(fcp?.startTime || 0),
        ttfb: Math.round(nav?.responseStart || 0),
        domContentLoaded: Math.round(nav?.domContentLoadedEventEnd || 0),
        transferKB: Math.round(transferBytes / 1024),
        requests: resources.length,
      };
    });
    results.push({ width, name, ...metrics });
    await context.close();
  }
}

await browser.close();
console.log(JSON.stringify(results, null, 2));
