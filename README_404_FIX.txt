WARDOGS All-404 Route Fix

Root cause fixed:
Astro dynamic routes were generated from content page.id (file path), while canonicalPath and internal links intentionally omit /entities/.
Example old generated route: /weapons/entities/m4/
Intended route: /weapons/m4/

Fix:
- src/pages/[...slug].astro now generates routes from canonicalPath.
- Added scripts/audit-built-404.mjs.
- Added npm script: npm run audit:404

After applying:
1. npm run build
2. npm run audit:404
3. npx pagefind --site .\dist
4. node .\scripts\offline-verify.mjs

Expected audit result:
Broken references: 0
404 audit: PASS
