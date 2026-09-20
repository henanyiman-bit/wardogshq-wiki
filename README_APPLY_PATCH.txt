WARDOGS Loadout Children Professional Rebuild

Frozen pages NOT modified:
/
/money/
/map/
/loadouts/
/vehicles/
/weapons/

Replace these files:
src/content/wiki/loadouts/pilot.mdx
src/content/wiki/loadouts/best-loadouts.mdx
src/content/wiki/loadouts/medic.mdx
src/content/wiki/loadouts/budget.mdx
src/content/wiki/loadouts/save-rebuy.mdx
src/styles/global.css

Then run:
npm run build
npx pagefind --site .\dist
node .\scripts\offline-verify.mjs
