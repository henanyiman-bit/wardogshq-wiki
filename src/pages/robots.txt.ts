export const prerender = true;

export function GET({ site }: { site: URL | undefined }) {
  const base = site ?? new URL('https://wardogshq.wiki');
  const sitemap = new URL('/sitemap-index.xml', base).href;
  return new Response(`User-agent: *\nAllow: /\nSitemap: ${sitemap}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
