import { SOURCES } from '../src/data/sources.ts';

const results = [];
for (const source of SOURCES) {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000);
    const response = await fetch(source.url, {
      redirect: 'follow',
      signal: controller.signal,
      headers: {
        'user-agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/142 Safari/537.36',
        accept: 'text/html,application/xhtml+xml',
      },
    });
    clearTimeout(timeout);
    results.push({
      id: source.id,
      status: response.status,
      finalUrl: response.url,
      ok: response.ok,
    });
  } catch (error) {
    results.push({ id: source.id, status: null, error: String(error) });
  }
}

console.log(JSON.stringify(results, null, 2));
const failures = results.filter((item) => !item.ok);
console.log(
  JSON.stringify(
    {
      checked: results.length,
      failures: failures.length,
      failedIds: failures.map((item) => item.id),
    },
    null,
    2,
  ),
);
