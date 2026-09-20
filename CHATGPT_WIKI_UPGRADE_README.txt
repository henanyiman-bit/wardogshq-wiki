WARDOGS Wiki visual/content upgrade patch

Use:
1. Stop the local preview server.
2. Extract this ZIP directly into:
   C:\Users\Administrator\Documents\ChatGPT\WARDOGS\WARDOGS_Wiki_Project
3. Allow Windows to replace/overwrite existing files.
4. Run:
   npm run build
   npx pagefind --site .\dist
   node .\scripts\offline-verify.mjs
5. Start local preview again:
   npx serve .\dist

Changes:
- Homepage centered/full-width Wiki composition
- Official WARDOGS gameplay images added to key pages using existing verified Team17 media URLs
- Two-column Wiki layout with sticky Page Information / Table of Contents sidebar
- Expanded 16 important pages from thin summaries into detailed Wiki-style guides
- Preserved existing routes, canonicals and index/noindex decisions
- Preserved the Astro 5 HeroSearch public script fix (is:inline)
- build-production.ps1 now stops correctly when a native command fails

Offline source verification before packaging:
- MDX pages: 37
- Registered routes: 38
- Canonicals: 38
- Broken internal links: 0
- Missing routes: 0
- Duplicate page IDs: 0
- Status: PASS
