import { getCollection } from 'astro:content';
import { PROGRAMMATIC_COMPARISONS, comparisonPath } from '../data/seo/programmatic-growth';
import { getTopicCluster } from '../data/seo/growth-loop';

export const prerender = true;

export async function GET({ site }: { site: URL | undefined }) {
  const base = site ?? new URL('https://wardogshq.wiki');
  const pages = await getCollection('wiki', ({ data }) => data.indexable);
  const records = [
    ...pages.map((page) => ({
      url: new URL(page.data.canonicalPath, base).href,
      title: page.data.title,
      description: page.data.description,
      type: page.data.pageType,
      topicCluster: getTopicCluster(page.data.canonicalPath),
      lastReviewed: page.data.updated.toISOString().slice(0, 10),
    })),
    ...PROGRAMMATIC_COMPARISONS.map((comparison) => {
      const path = comparisonPath(comparison);
      return {
        url: new URL(path, base).href,
        title: comparison.title,
        description: comparison.description,
        type: 'comparison',
        topicCluster: getTopicCluster(path),
        lastReviewed: '2026-09-24',
      };
    }),
  ].sort((a, b) => a.url.localeCompare(b.url));

  return new Response(JSON.stringify({
    name: 'WARDOGS Wiki Content Index',
    generatedAt: new Date('2026-09-24T00:00:00Z').toISOString(),
    itemCount: records.length,
    items: records,
  }, null, 2), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
}
