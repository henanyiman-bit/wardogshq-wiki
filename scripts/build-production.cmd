@echo off
setlocal
if "%~1"=="" (
  echo Usage: scripts\build-production.cmd https://your-domain.com
  exit /b 1
)
set "SITE=%~1"
echo [1/5] npm install
call npm install || exit /b 1
echo [2/5] astro check
call npm run check || exit /b 1
echo [3/5] astro build
call npm run build || exit /b 1
echo [4/5] pagefind
call npm run search || exit /b 1
echo [5/5] offline verify
node scripts\offline-verify.mjs || exit /b 1
echo WARDOGS production build completed successfully. Output: dist\
endlocal
