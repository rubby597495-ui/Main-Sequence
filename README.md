# Main Sequence Field Guide

An independent, English-language wiki, guide library and tool site for the
upcoming space factory sim **Main Sequence** by Tumbling Dumpling Studio,
published by Mythwright.

- Live target domain: `https://mainsequenceguide.wiki`
- Stack: Astro 7 (static output) + Tailwind CSS 4
- Deployment: Cloudflare Pages
- Status: pre-launch; last content verification **November 1, 2026**

This project is not affiliated with or endorsed by Tumbling Dumpling Studio,
Mythwright or Valve. Official screenshots are used for editorial illustration
and credited in the site footer and source archive.

## Quick start

Requirements:

- Node.js **22.23.4** (`.nvmrc` / `.node-version` are included)
- npm 10+

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # static output in dist/
npm run preview   # preview the built site
```

Planning notes:

- `docs/keyword-and-content-map.md` — query clusters, page mapping, excluded
  content and launch-update plan (no fabricated search volume).
- `docs/verification.md` — actual test commands, results and unverified items.

## Cloudflare Pages deployment

Use the following Pages settings:

| Setting | Value |
| --- | --- |
| Framework preset | Astro |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Node version | `22.23.4` via `.nvmrc` / `.node-version` or `NODE_VERSION` |

The site is fully static. It does not require a Worker, server runtime,
database, KV namespace or secrets. `public/_headers` contains security and
cache headers. Cloudflare Pages automatically serves `dist/404.html` with a
404 status for unknown paths, and `.nvmrc` tells its build image which Node
version to use.

If you connect the repository through the Cloudflare Pages dashboard, set the
production branch and add the domain in the Pages project. Do not deploy the
`research/` or `node_modules/` directories; only `dist/` is the build artifact.

### Environment variables

No environment variables are required for the current build. The optional ad
integration uses:

```dotenv
PUBLIC_ADSTERRA_ENABLED=false
PUBLIC_ADSTERRA_BANNER_KEY=
```

Only `PUBLIC_*` values are embedded in the static site. Never put a private
token or secret in a `PUBLIC_*` variable. There are no server-side secrets in
this project.

## Content architecture

```
src/
  assets/images/          Optimised source screenshots
  components/             Layout, navigation, tools, tables, source lists
  config/                 Ad configuration
  data/
    site.ts               Site identity, navigation, release metadata
    game.ts               Confirmed game facts, feature copy, requirements, FAQs
    sources.ts            Source register with IDs, URLs and usage notes
    updates.ts            Official announcement timeline
    resources.ts          Resource/material database rows
    modules.ts            Ship/station module database rows
    research.ts           Visible research nodes and science types
    checklist.ts          Demo checklist steps
    guides.ts             Guide hub metadata
  lib/                    OG/schema/image helpers
  pages/                  Static routes (25 HTML pages including 404)
  styles/global.css       Tailwind import, design tokens and components
public/
  icons/                  Original site mark, favicons, manifest
  og/                     Generated Open Graph image
  robots.txt              Crawl rules
  _headers                Cloudflare Pages headers
scripts/                  Build/validation/visual/a11y checks
docs/                     Editorial and keyword mapping notes
```

Game facts live in `src/data`. UI and presentation live in components. Long
guide prose is intentionally kept inside its page so it can be edited against
the page’s source list; database rows are data-driven.

## Adsterra setup

The integration is intentionally disabled until a real placement key is
supplied. With `PUBLIC_ADSTERRA_ENABLED=true` and a banner key, the
`AdSlot.astro` component renders a labelled 300×250 Adsterra placement in
guide and update-page content.

Before enabling ads in production:

1. Confirm the domain and placement are approved in Adsterra.
2. Add the environment variables in Cloudflare Pages.
3. Test the live placement on staging.
4. Update the privacy policy with the live provider details and add the
   consent mechanism required in the jurisdictions you serve. The current
   build states that advertising is inactive.
5. Do not place ads on error pages, legal pages or above the primary content
   in a way that obscures navigation or creates layout shift.

The current repository cannot verify a live Adsterra fill or payment because no
publisher key or account access was supplied. That is marked as unverified in
the verification notes rather than assumed to work.

## SEO and validation

What is implemented:

- Unique title/description/canonical on every indexable page
- One H1 per page, semantic heading hierarchy and breadcrumb navigation
- Canonical URLs with trailing slashes
- `robots.txt`, XML sitemap index, custom 404 with `noindex`
- `WebSite`, `Organization`, `WebPage`, `Article`, `VideoGame`,
  `BreadcrumbList` and `FAQPage` JSON-LD where it matches visible content
- No fake reviews, ratings, prices, player counts or ratings markup
- Accessible skip link, focus states, keyboard-operable nav and filters
- Responsive tables that become labelled cards on mobile
- Browser-local checklist persistence with no account or server
- Original OG image and icons
- Security/cache headers for Cloudflare Pages

Run the content/static checks after a build:

```bash
npm run build
npm run validate
```

`validate.mjs` checks titles, descriptions, canonicals, H1s, duplicate IDs,
JSON-LD parsing, FAQ/schema count consistency, internal links and anchors,
orphan pages, sitemap URLs, 404 noindex, image files and robots.txt.

Run the accessibility audit against a running preview:

```bash
npm run preview
npm run test:a11y
```

The current axe-core WCAG A/AA scan covers every content page at 1440px and
390px widths. See `docs/verification.md` for the recorded result.

Run the browser/visual/interaction test against a running preview:

```bash
npm run test:visual
npm run test:perf
npm run test:nojs
```

It checks all desktop routes, representative mobile and tablet routes, console
errors, broken images, canonical/metadata, horizontal overflow, checklist
persistence, database filters, the crew planner and the mobile menu.
Screenshots are written to `research/visual/` (ignored by git). The tests use
an installed Chrome/Edge by default; set `CHROME_PATH` if yours is elsewhere,
and `PREVIEW_URL` if the preview is not on `http://127.0.0.1:4321`.

Run the Cloudflare Pages routing check against the Wrangler local emulator:

```bash
npm run build
npx wrangler pages dev dist --ip 127.0.0.1 --port 8788
node scripts/http-check.mjs http://127.0.0.1:8788
```

The HTTP check verifies all sitemap URLs, robots, the manifest, the custom 404
status/body and the trailing-slash redirect.

## Search Console and Bing Webmaster Tools

After deployment:

1. Add and verify the domain in Google Search Console and Bing Webmaster Tools.
2. Submit `https://mainsequenceguide.wiki/sitemap-index.xml`.
3. Use URL Inspection / URL Submission for the home page and the core launch,
   demo, beginner and database pages.
4. Check canonical, crawl and indexing status per URL. Discovery is not
   indexing, and indexing is not ranking.
5. Review actual impressions, queries, clicks and indexing after launch. Update
   pages based on real evidence, not on a fixed publishing cadence.

No indexing outcome or ranking is guaranteed. This repository contains no
automated Search Console or Bing credentials. Those actions require account
access and are therefore documented rather than simulated.

## Content maintenance rules

- Official = developer/publisher/storefront/patch note/official screenshot.
- Reported = credible press; used as context, not to override official facts.
- Community-tested = player report; clearly labelled, linked and patch-dated.
- Estimated/unknown = labelled as such; never promoted to a definite number.
- Re-check release price, exact unlock time, demo status, save transfer and
  build-specific mechanics at Early Access launch.
- Do not add empty categories just to match a wiki checklist. The current
  project intentionally has no character, quest, map or bestiary pages because
  the verified public data does not support them.

## Image and trademark notes

Game imagery is sourced from official Steam media and the official game site.
It remains the property of Tumbling Dumpling Studio and Mythwright. It is used
for editorial commentary and illustration. The site’s own mark, OG composition,
layout, tables and written analysis are original. No official game logo is used
as the site logo.

## Known limitations

- The game is unreleased (Early Access scheduled November 12, 2026). Price and
  exact launch time are not announced.
- The full recipe, module-stat, enemy and quest databases are not public.
- The demo may change before or after launch.
- A live Adsterra key, Search Console access and Bing Webmaster access were not
  supplied; those operational steps remain unverified.
- The public contact address is `editor@mainsequenceguide.wiki`. Create the
  mailbox (or replace the address in `src/data/site.ts`) before launch.
- The game was researched from official and clearly labelled community sources;
  no first-hand playtime is claimed.
