# WARDOGS — Phase 4 Quality Control & Validation

Status: **PASS**

This Phase 4 run validates the expanded Phase 3 site generated from the 583-long-tail / 38-route architecture. It does not run the Astro or Pagefind production build; those remain locked to Phase 5.

## Final Quality Gate

- Duplicate Routes: 0
- Duplicate Primary Intent Owners: 0
- Duplicate Titles: 0
- Duplicate H1: 0
- Duplicate Entity Pages: 0
- Major Content Duplication: 0
- Keyword Cannibalization: 0
- Broken Internal Links: 0
- Orphan Indexable Pages: 0
- Missing Canonical: 0
- Invalid Entity References: 0
- Missing Required Frontmatter: 0

## Repairs made during Phase 4

1. Removed 33 clearly off-topic/navigation-noise terms from homepage **SEO targeting** while preserving their original upstream keyword records.
2. Rewrote overlapping loadout and weapon pages so they own distinct intents instead of repeating identical sections.
3. Rewrote HOLD/noindex entity/tool pages to remove exact paragraph duplication.
4. Added internal links to System Requirements and Early Access, reducing orphan indexable pages from 2 to 0.
5. Added `@astrojs/sitemap` configuration and excluded all six noindex routes from sitemap generation.
6. Replaced hard-coded public robots.txt with a generated robots endpoint that uses the configured final `SITE` origin.
7. Expanded JSON-LD to include WebSite/page nodes and BreadcrumbList on nested pages.

## Indexability

- Total planned routes: 38
- Indexable: 32
- Noindex/HOLD: 6

Noindex routes remain:

- `/map/interactive/`
- `/map/mortar-artillery/`
- `/factions/valkyra/`
- `/factions/lonestar/`
- `/factions/manticore/`
- `/settings/`

## Search QA

Pagefind runtime loading is wired to `/pagefind/pagefind.js`. Main article content is marked with `data-pagefind-body`; repeated header/footer chrome is excluded with `data-pagefind-ignore`.

Actual Pagefind indexing is not executed until Phase 5.

## Mobile/UI QA

The CSS includes responsive rules covering 375px, 390px and 430px-class devices, stacked mobile search controls, responsive Bento navigation, and table overflow fallback. No client-side islands are required for article content.

## Media QA

The official launch video used publicly matches the media registry. No local image is referenced by public pages in this Phase 3 snapshot, so there are no broken local image paths. Remote research-image records remain research/media candidates and are not silently rendered as production assets.

## Deployment-domain note

The final production domain has not been supplied. `Astro.site` therefore retains a development fallback while accepting the `SITE` environment variable. Phase 5 must set the final site origin before the publish-ready build so canonicals, robots and sitemap URLs use the actual domain.

## Stage lock

- Phase 4: PASS
- Actual Astro/Zod build: NOT RUN
- Pagefind index build: NOT RUN
- Final static route check: NOT RUN
- Production ZIP: NOT CREATED

Phase 5 may now begin.
