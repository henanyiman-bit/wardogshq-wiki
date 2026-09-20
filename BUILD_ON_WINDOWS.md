# WARDOGS Wiki — Windows Phase 5 Build Handoff

This source package targets the Astro 5 technical line and uses pinned dependency versions.

## Prerequisites

- Node.js compatible with `package.json` engines.
- npm access to `https://registry.npmjs.org/`.
- PowerShell or Command Prompt.

## PowerShell

```powershell
Set-ExecutionPolicy -Scope Process Bypass
.\scripts\build-production.ps1 -Site "https://your-real-domain.com"
```

## Command Prompt

```bat
scripts\build-production.cmd https://your-real-domain.com
```

## Required success sequence

1. `npm install`
2. `npm run check`
3. `npm run build`
4. `npm run search`
5. `node scripts/offline-verify.mjs`

Only after all five commands exit successfully should the site be treated as build-validated and publish-ready.

Static output is written to `dist/`.

## Cloudflare Pages

- Build command: `npm run build && npm run search`
- Output directory: `dist`
- Environment variable: `SITE=https://your-real-domain.com`

Do not publish the current package as an already-built artifact until the sequence above succeeds in an environment with npm registry access.
