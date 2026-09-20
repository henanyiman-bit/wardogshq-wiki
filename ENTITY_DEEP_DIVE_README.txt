WARDOGS Entity Deep Dive Upgrade

Homepage: frozen / not modified.

Expanded:
- 35 weapon entity pages
- 20 vehicle entity pages
- 3 map entity pages

New entity-page structure:
- dedicated identification render where available
- stat / fact summary
- budget or purchase-risk context
- role / terrain guidance
- contextual gameplay image
- same-class / same-role related entities
- practical checklist
- FAQ
- map terrain references and recorded tower coordinates where supported

After overwrite:
npm run build
npx pagefind --site .\dist
node .\scripts\offline-verify.mjs
