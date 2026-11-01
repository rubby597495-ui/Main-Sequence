# Verification record

**Date:** November 1, 2026  
**Build:** Astro 7.4.1 static output  
**Local Node:** 22.22.0 (meets Astro 7.4.1's `>=22.22.0` engine)  
**Cloudflare Pages build image target:** Node 22.23.4 via `.nvmrc` /
`.node-version`  
**Output:** `dist/` — 25 HTML pages including the custom 404

This record contains the checks that were actually run. It does not claim
field data, account access or live advertising results that were not available.

## 1. Static build and type checks

```bash
npm run check
npm run build
npm run test:content
```

Results:

- `astro check`: **0 errors, 0 warnings, 0 hints**
- `astro build`: **25 pages**, plus 120 optimized image variants
- `node scripts/validate.mjs`:
  - 25 HTML pages inspected
  - **24 sitemap URLs**
  - **30 source records**, **246 source references** validated against the
    source register
  - **0 errors, 0 warnings**
- Validation checks included title/description uniqueness and length, one H1,
  canonical path/origin, robots meta, duplicate IDs, JSON-LD parsing, FAQ/visible
  FAQ count agreement, internal link and anchor targets, orphan pages, sitemap
 /robots alignment, 404 noindex, local image file existence.

## 2. Accessibility

```bash
npm run preview
npm run test:a11y
```

- axe-core with `wcag2a`, `wcag2aa`, `wcag21a`, `wcag21aa` rules
- 24 content routes at **1440px** and **390px**
- **0 violations** in the final run

Targeted Lighthouse checks after fixes:

| Page | Accessibility | Best Practices | SEO |
| --- | ---: | ---: | ---: |
| Home | 100 | 100 | 100 |
| Release status | 100 | 100 | 100 |
| Ship & station modules | 100 | 100 | 100 |
| Co-op guide | 100 | 100 | 100 |

The checks found and led to fixes for low-contrast metadata, definition-list
markup, home-link accessible names, scrollable regions and small table source
links. An earlier score below 100 was not kept as a pass.

## 3. Browser, responsive and interaction checks

```bash
npm run test:visual
```

- 25 desktop routes at **1440px**
- 5 representative mobile routes at **390px**
- 8 tablet checks at **768px** and **1024px**
- **38 page-audits**, 0 errors
- Additional manual width checks at 320, 360, 375, 1199, 1201 and 1280 px found
  no document-level horizontal overflow.
- Checked for console errors, uncaught page errors, broken loaded images,
  duplicate IDs, metadata, canonical, H1 count and horizontal overflow.
- Interaction checks passed:
  - countdown initialises and local time is rendered
  - checklist saves two checked items across reload; reset clears them
  - resource category filter shows 4 of 31 entries for “Science type”
  - resource text search returns matches
  - crew planner generates 4 cards for a 4-player crew
  - mobile menu opens and is keyboard/ARIA state-aware

Screenshots from this run were written to `research/visual/` during the build
session; that test-output directory is not part of the production artifact.

No-JavaScript check:

```bash
npm run test:nojs
```

At 390px and 1440px on the release page, the H1, 7 primary navigation links,
3 tables, 43 paragraphs and canonical URL were present with JavaScript
disabled. The tool pages retain static fallback content; interactive features
remain enhancements.

## 4. Cloudflare Pages routing and HTTP

```bash
npm run build
npx wrangler pages dev dist --ip 127.0.0.1 --port 8788
node scripts/http-check.mjs http://127.0.0.1:8788
```

Results:

- **24/24 sitemap URLs return HTTP 200**
- Unknown URL returns **HTTP 404** and the custom “Signal lost” page
- 404 page contains `noindex`
- `/game` (without trailing slash) redirects rather than duplicating the page
- `_headers` was parsed by the Wrangler Pages emulator; response headers
  included HSTS, `X-Content-Type-Options`, `Referrer-Policy`,
  `Permissions-Policy` and `X-Frame-Options`
- `robots.txt`, the sitemap index, site manifest and favicon were reachable

## 5. Performance (local lab)

```bash
npm run test:perf
```

Headless Chromium on localhost, no network/CPU throttling. These are lab
measurements, not Google field Core Web Vitals.

| Page | Width | LCP | CLS |
| --- | ---: | ---: | ---: |
| Home | 1440 | 240 ms | 0 |
| Beginner guide | 1440 | 132 ms | 0 |
| Modules database | 1440 | 144 ms | 0 |
| Co-op guide | 1440 | 140 ms | 0 |
| Launch timer | 1440 | 124 ms | 0 |
| Demo checklist | 1440 | 100 ms | 0 |
| Home | 390 | 92 ms | 0 |
| Beginner guide | 390 | 108 ms | 0 |
| Modules database | 390 | 112 ms | 0 |
| Co-op guide | 390 | 120 ms | 0 |
| Launch timer | 390 | 120 ms | 0 |
| Demo checklist | 390 | 88 ms | 0 |

Font preloads were added after an earlier run showed layout shift from the
display-font swap. The final runs above have zero CLS on the sampled pages.
Home transferred approximately 260 KB at desktop and 139 KB at mobile in this
local run, with 8–9 requests.

## 6. Dependency security

```bash
npm audit
npm audit --omit=dev
```

Final result: **0 vulnerabilities** for the installed tree after upgrading
Astro 6 to the patched Astro 7.4.1 line and running a non-force audit fix.

## 7. Source link reachability

```bash
npm run test:sources
```

- 30 source records checked from `src/data/sources.ts`
- 26 returned HTTP 200
- 4 returned HTTP 403 to the automated request:
  `steamdb-playtest-13`, `steamdb`, `epic-store`, `capsulecomputers`
- The 403 responses are bot/anti-scraping responses, not confirmed dead links.
  They are not presented as automatically verified; SteamDB is also clearly
  labelled unofficial in the content.

## 8. Advertising integration build test

A temporary non-live build was run with:

```dotenv
PUBLIC_ADSTERRA_ENABLED=true
PUBLIC_ADSTERRA_BANNER_KEY=test-placeholder
```

- The labelled Adsterra placement and `invoke.js` reference appeared in the
  expected guide/update pages.
- The production build was then regenerated without those variables and
  checked to contain **no test key or ad script**.

Not verified:

- Live Adsterra approval, fill, revenue or consent behavior (no publisher key
  or account was supplied).
- Compliance with every jurisdiction's advertising/consent requirements. This
  must be reviewed before enabling ads.

## 9. Not verified / intentionally not claimed

- **First-hand game testing:** the build was researched from official store
  pages, developer posts, patches, official screenshots, press material and
  explicitly labelled community reports. No claim of personal playtime is made.
- **Google Search Console / Bing Webmaster Tools verification, sitemap
  submission and indexing:** no account access was supplied. Steps are
  documented in `README.md`; no ranking or indexing promise is made.
- **Search volume, keyword difficulty, traffic or revenue:** no reliable
  keyword-tool export was available. The keyword map labels its observations
  as SERP/intent analysis rather than metrics.
- **Physical phones/tablets:** responsive testing used Chromium device
  emulation at 320–1440 px, not physical hardware.
- **Field Core Web Vitals:** the performance numbers are local lab runs with no
  real-user traffic.
- **Console, macOS, Linux and mobile platform support:** no such versions have
  been announced.
- **Price and exact launch unlock hour:** not announced by the publisher; the
  16:00 UTC reference is labelled unofficial.
