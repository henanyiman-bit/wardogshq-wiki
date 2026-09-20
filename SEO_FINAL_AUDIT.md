# WARDOGS Wiki SEO / pSEO Final Audit

Audit target: `https://wardogshq-wiki.pages.dev/`  
Canonical origin: `https://wardogshq.wiki`  
Audit date: 2026-09-20

## Status

**SEO / pSEO launch status: NEEDS FIXES**

Blocking findings:

1. `/factions/` is an orphan indexable page with zero internal inbound links from the indexable URL set.
2. `/money/` and `/loadouts/` fall below the 250-word thin-content review threshold.
3. `/sitemap.xml` is not an XML sitemap; it resolves to homepage HTML. The valid discovery endpoint is `/sitemap-index.xml`.
4. `/building/` is not an indexed pSEO URL and currently resolves to homepage content with the homepage canonical.

## URL inventory

| Metric | Result |
|---|---:|
| Sitemap index files | 1 |
| Indexable URLs in Sitemap | 90 |
| Live mapped MDX URLs | 95 |
| Homepage URLs | 1 |
| Total intended live pages checked | 96 |
| `noindex,follow` pages | 6 |
| Sitemap URLs returning non-200 | 0 |

The six intentionally excluded URLs are:

- `/factions/lonestar/`
- `/factions/manticore/`
- `/factions/valkyra/`
- `/map/interactive/`
- `/map/mortar-artillery/`
- `/settings/`

All six return HTTP 200, use `noindex,follow`, have one H1, and are excluded from the Sitemap.

## Keyword mapping

| Metric | Result |
|---|---:|
| MDX pages with `primaryKeyword` | 95 / 95 |
| Missing primary keywords | 0 |
| Exact duplicate primary keywords | 0 |
| Keyword-mapped URLs without a live page | 0 |
| Live mapped content pages without a keyword | 0 |

The homepage is intentionally outside the MDX keyword map.

## Title and H1

| Check | Result |
|---|---:|
| Empty titles | 0 |
| Duplicate titles among indexable URLs | 0 |
| Pages without exactly one H1 | 0 |

All 90 indexable Sitemap URLs have a non-empty title and exactly one H1. The six `noindex` pages also have one H1 and distinct titles.

## Canonical

| Check | Result |
|---|---:|
| Missing canonicals | 0 |
| Duplicate canonicals in Sitemap | 0 |
| Sitemap canonical mismatches | 0 |
| Canonicals using `pages.dev` | 0 |

All Sitemap pages resolve canonically to the matching `https://wardogshq.wiki/...` URL. `/building/` is an exception outside the Sitemap: it currently returns homepage content and the homepage canonical instead of a Building canonical.

## Sitemap

- `/sitemap-index.xml`: valid and accessible.
- `/sitemap-0.xml`: valid and contains 90 indexable URLs.
- `/robots.txt`: correctly references `https://wardogshq.wiki/sitemap-index.xml`.
- `/sitemap.xml`: invalid endpoint; returns homepage HTML instead of XML or a redirect to the Sitemap index.

## Internal links

- Broken internal links found in the indexable crawl: 0.
- Indexable orphan pages: 1.
- Pages with only one internal inbound link: 11.

Low-inbound entity URLs include `/vehicles/humvee/`, `/vehicles/kodiak/`, `/vehicles/kodiak-m249/`, `/vehicles/kodiak-pickup/`, `/vehicles/sph-2/`, `/weapons/compound-bow/`, `/weapons/galil/`, `/weapons/kh-2002/`, `/weapons/m1911/`, `/weapons/sv98/`, and `/weapons/t-21/`.

## Thin content

Threshold used: fewer than 250 visible words inside the primary indexed article body.

| URL | Visible words |
|---|---:|
| `/money/` | 128 |
| `/loadouts/` | 178 |

No other indexable URL fell below this threshold.

## Cannibalization

No direct technical cannibalization was detected:

- Exact duplicate primary keywords: 0.
- Duplicate indexable titles: 0.
- Duplicate indexable canonicals: 0.

`/building/` remains a duplicate-homepage exposure outside the Sitemap until its route serves Building content or redirects to the canonical Building URL.

## Orphan pages

| URL | Internal inbound links |
|---|---:|
| `/factions/` | 0 |

No other indexable Sitemap page has zero internal inbound links.
