(() => {
  const input = document.querySelector('#wiki-search');
  const button = document.querySelector('#wiki-search-btn');
  const results = document.querySelector('#wiki-search-results');
  if (!input || !button || !results) return;
  const run = async () => {
    const q = input.value.trim();
    if (!q) { results.innerHTML = ''; return; }
    try {
      const pagefind = await import('/pagefind/pagefind.js');
      const search = await pagefind.search(q);
      const rows = await Promise.all(search.results.slice(0,8).map(r=>r.data()));
      results.innerHTML = rows.map(r => `<a href="${r.url}"><strong>${r.meta?.title || r.url}</strong><span>${r.excerpt || ''}</span></a>`).join('') || '<p>No results.</p>';
    } catch (e) {
      results.innerHTML = '<p>Search index is created during the production build.</p>';
    }
  };
  button.addEventListener('click', run);
  input.addEventListener('keydown', e => { if (e.key === 'Enter') run(); });
})();
