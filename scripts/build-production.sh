#!/usr/bin/env bash
set -euo pipefail
: "${SITE:?Set SITE to the production origin, e.g. https://wiki.example.com}"
npm install
npm run check
npm run build
npm run search
node scripts/offline-verify.mjs
printf '\nProduction build completed for %s\n' "$SITE"
