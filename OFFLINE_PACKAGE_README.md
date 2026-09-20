# WARDOGS Wiki — Offline Source Package

This ZIP is the offline source-delivery package for the WARDOGS Wiki project.

## Included
- Astro 5 source code
- 37 MDX content pages + homepage
- Phase 1–4 validated data and QA artifacts
- 38 registered routes and canonicals
- Long-tail expansion data
- Search UI source
- Pinned Astro 5 dependency versions
- Offline verification script
- Production build script

## Pinned dependency line
- astro 5.16.6
- @astrojs/mdx 4.2.3
- @astrojs/sitemap 3.3.0
- tailwindcss 4.3.3
- @tailwindcss/vite 4.3.3
- @astrojs/check 0.9.6
- typescript 5.9.3
- pagefind 1.5.2

## Offline verification
Run:

```bash
node scripts/offline-verify.mjs
```

Expected source-structure result: PASS.

## Important build status
This package does NOT contain node_modules and is NOT an already-built production artifact.
The previous build environment could not reach registry.npmjs.org, so npm install, Astro check/build, and Pagefind indexing were not completed there.

When internet/package access is available, run:

```bash
SITE=https://your-domain.example ./scripts/build-production.sh
```

or manually:

```bash
npm install
npm run check
npm run build
npm run search
```

Only after those commands succeed should the project be treated as production-built / publish-ready.
