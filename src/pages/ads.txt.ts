export const prerender = true;

export function GET() {
  const records = (import.meta.env.PUBLIC_ADS_TXT ?? '').trim();
  const body = records || '# No authorized advertising sellers configured.';
  return new Response(`${body}\n`, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
