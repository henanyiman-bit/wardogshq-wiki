import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(process.argv[2] || 'dist');
if (!fs.existsSync(root)) {
  console.error(`404 audit: directory not found: ${root}`);
  process.exit(2);
}

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(full) : [full];
  });
}

const files = walk(root);
const htmlFiles = files.filter((f) => f.endsWith('.html'));
if (!htmlFiles.length) {
  console.error('404 audit: no HTML files found. Build Astro first.');
  process.exit(2);
}

const refs = [];
const attrRe = /\b(?:href|src)=["']([^"']+)["']/gi;
for (const file of htmlFiles) {
  const html = fs.readFileSync(file, 'utf8');
  for (const match of html.matchAll(attrRe)) {
    const raw = match[1];
    if (!raw.startsWith('/') || raw.startsWith('//')) continue;
    const clean = raw.split('#')[0].split('?')[0];
    if (!clean) continue;
    refs.push({ file: path.relative(root, file).replaceAll('\\', '/'), url: clean });
  }
}

function existsForUrl(url) {
  const rel = decodeURIComponent(url).replace(/^\/+/, '');
  const direct = path.join(root, rel);
  if (fs.existsSync(direct) && fs.statSync(direct).isFile()) return true;
  if (fs.existsSync(direct) && fs.statSync(direct).isDirectory() && fs.existsSync(path.join(direct, 'index.html'))) return true;
  if (fs.existsSync(path.join(root, rel + '.html'))) return true;
  if (fs.existsSync(path.join(root, rel, 'index.html'))) return true;
  return false;
}

const broken = refs.filter((ref) => !existsForUrl(ref.url));
const uniqueBroken = [...new Map(broken.map((b) => [`${b.file}|${b.url}`, b])).values()];

const report = {
  htmlFiles: htmlFiles.length,
  internalReferences: refs.length,
  brokenReferences: uniqueBroken.length,
  broken: uniqueBroken,
};
fs.writeFileSync(path.join(root, '404-audit.json'), JSON.stringify(report, null, 2));

console.log(`HTML files: ${report.htmlFiles}`);
console.log(`Internal href/src references: ${report.internalReferences}`);
console.log(`Broken references: ${report.brokenReferences}`);
if (uniqueBroken.length) {
  for (const item of uniqueBroken) console.log(`BROKEN ${item.url} <- ${item.file}`);
  process.exit(1);
}
console.log('404 audit: PASS');
