# WARDOGS Phase 5 Retry Status

## Current state

- Astro technical line: 5.x
- Astro pinned: 5.16.6
- @astrojs/mdx pinned: 4.2.3
- @astrojs/sitemap pinned: 3.3.0
- Tailwind CSS pinned: 4.3.3
- @tailwindcss/vite pinned: 4.3.3
- Pagefind pinned: 1.5.2
- @astrojs/check pinned: 0.9.6
- TypeScript pinned: 5.9.3

## Retry result

A real `npm install` was retried in this execution environment. It did not complete because DNS/network access to npm registries remains unavailable (`EAI_AGAIN` / timeout). An alternate registry was also tested and failed at DNS resolution.

Therefore these gates remain unclaimed:

- npm dependency install: BLOCKED
- astro check: NOT RUN
- astro production build: NOT RUN
- pagefind indexing: NOT RUN
- dist-level final QA: NOT RUN
- publish-ready production ZIP: NOT CREATED

## Offline fixes and validation completed

A Phase 5 source audit found raw Markdown syntax inside `src/pages/index.astro`. Astro templates do not automatically parse arbitrary Markdown text, so the homepage was corrected to semantic HTML (headings, list, table, emphasis, links, and data-boundary callout).

`node scripts/offline-verify.mjs` now reports PASS for:

- 37 MDX content pages
- 38 registered routes including homepage
- 38 canonical paths
- 0 missing registered routes
- 0 extra content routes
- 0 duplicate page IDs
- 0 broken internal Markdown links
- 0 raw Markdown leakage detected on homepage

## Resume command

Run in an environment with npm network access:

```bash
SITE=https://your-real-domain.example ./scripts/build-production.sh
```

The project must not be marked publish-ready until that command completes successfully and the generated `dist/` is reviewed.
