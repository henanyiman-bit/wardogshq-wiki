import { getCollection } from 'astro:content';

export const prerender = true;

const escapeXml = (value: string) => value
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&apos;');

export async function GET({ site }: { site: URL | undefined }) {
  const base = site ?? new URL('https://wardogshq.wiki');
  const pages = (await getCollection('wiki', ({ data }) => data.indexable))
    .sort((a, b) => b.data.updated.getTime() - a.data.updated.getTime())
    .slice(0, 40);
  const latest = pages[0]?.data.updated ?? new Date('2026-09-24T00:00:00Z');
  const items = pages.map((page) => `
    <item>
      <title>${escapeXml(page.data.title)}</title>
      <link>${escapeXml(new URL(page.data.canonicalPath, base).href)}</link>
      <guid isPermaLink="true">${escapeXml(new URL(page.data.canonicalPath, base).href)}</guid>
      <description>${escapeXml(page.data.description)}</description>
      <pubDate>${page.data.updated.toUTCString()}</pubDate>
    </item>`).join('');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"><channel>
  <title>WARDOGS Wiki updates</title>
  <link>${escapeXml(new URL('/', base).href)}</link>
  <description>Recently reviewed WARDOGS Wiki guides and database references.</description>
  <language>en</language>
  <lastBuildDate>${latest.toUTCString()}</lastBuildDate>${items}
</channel></rss>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
}
