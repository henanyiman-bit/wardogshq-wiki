Professional portal rebuild for Money / Map / Loadouts and their child pages.
Homepage is untouched.

Key changes:
- Removed generic infographic-style filler from these content families.
- Rebuilt the 3 hubs as real Wiki portal/index pages.
- Added real WARDOGS gameplay / map / loadout imagery matched to the content section.
- Deepened child pages with one relevant visual each.
- 22 image references across these 17 pages; 22 unique image URLs; no repeated image within the three content families.
- Broken remote images hide cleanly instead of rendering a broken-image icon.

After overwrite:
npm run build
npx pagefind --site .\dist
node .\scripts\offline-verify.mjs
