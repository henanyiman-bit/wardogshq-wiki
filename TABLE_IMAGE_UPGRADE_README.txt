WARDOGS Wiki table image upgrade

Homepage: unchanged.

Changes:
- Weapons database table: 35 rows now include weapon thumbnail + name.
- Vehicles database table: 20 rows now include vehicle thumbnail + name.
- Map hub: 3 named maps now have a visual map index with images.
- Responsive thumbnail sizing added to global.css.
- Images do not display source-proof labels.

After overwrite:
1. npm run build
2. npx pagefind --site .\\dist
3. node .\\scripts\\offline-verify.mjs
