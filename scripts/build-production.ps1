param(
  [Parameter(Mandatory=$true)]
  [string]$Site
)
$ErrorActionPreference = 'Stop'
$env:SITE = $Site

function Run-Step([string]$Label, [scriptblock]$Command) {
  Write-Host $Label
  & $Command
  if ($LASTEXITCODE -ne 0) {
    throw "$Label failed with exit code $LASTEXITCODE"
  }
}

Run-Step "[1/5] npm install" { npm install }
Run-Step "[2/5] astro check" { npm run check }
Run-Step "[3/5] astro build" { npm run build }
Run-Step "[4/5] pagefind" { npm run search }
Run-Step "[5/5] offline verify" { node scripts/offline-verify.mjs }
Write-Host "WARDOGS production build completed successfully. Output: dist/"
