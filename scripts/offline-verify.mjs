import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const contentDir = path.join(root,'src/content/wiki');
const routeRegistry = JSON.parse(fs.readFileSync(path.join(root,'src/data/seo/phase2/route-registry.json'),'utf8'));
const pageMatrix = JSON.parse(fs.readFileSync(path.join(root,'src/data/seo/phase2/page-matrix.json'),'utf8'));

function walk(dir){ return fs.readdirSync(dir,{withFileTypes:true}).flatMap(d=>d.isDirectory()?walk(path.join(dir,d.name)):[path.join(dir,d.name)]); }
const files=walk(contentDir).filter(f=>/\.mdx?$/.test(f));
const pages=[];
for(const f of files){
  const raw=fs.readFileSync(f,'utf8');
  const m=raw.match(/^---\n([\s\S]*?)\n---/);
  if(!m) throw new Error(`Missing frontmatter: ${f}`);
  const fm={};
  for(const line of m[1].split('\n')){
    const mm=line.match(/^([A-Za-z0-9_]+):\s*(.*)$/); if(!mm) continue;
    let v=mm[2].trim();
    if((v.startsWith('"')&&v.endsWith('"'))||(v.startsWith("'")&&v.endsWith("'"))) v=v.slice(1,-1);
    if(v==='true') v=true; else if(v==='false') v=false;
    fm[mm[1]]=v;
  }
  for(const k of ['title','description','primaryKeyword','intent','pageType','canonicalPath','indexable','priority','updated','pageId']) if(!(k in fm)) throw new Error(`Missing ${k}: ${f}`);
  const links=[...raw.matchAll(/\]\((\/[A-Za-z0-9_\-\/]*\/?)\)/g)].map(x=>x[1]);
  pages.push({file:f,fm,links});
}
const canon=new Set(['/']);
for(const p of pages){ if(canon.has(p.fm.canonicalPath)) throw new Error(`Duplicate canonical ${p.fm.canonicalPath}`); canon.add(p.fm.canonicalPath); }
const broken=[];
for(const p of pages) for(const l of p.links){ const normalized=l.endsWith('/')?l:l+'/'; if(!canon.has(l) && !canon.has(normalized) && !l.startsWith('/pagefind/')) broken.push([p.fm.canonicalPath,l]); }
const routeList=Array.isArray(routeRegistry)?routeRegistry:(routeRegistry.routes||[]);
const routes=routeList.map(r=>r.url||r.path||r.route).filter(Boolean);
const missing=routes.filter(r=>!canon.has(r));
const extra=[...canon].filter(r=>!routes.includes(r) && r!=='/');
const ids=pages.map(p=>p.fm.pageId); const dupIds=ids.filter((x,i)=>ids.indexOf(x)!==i);
const mdLeak=fs.readFileSync(path.join(root,'src/pages/index.astro'),'utf8').match(/(^|\n)\s*(#{1,6}\s|\|[^\n]+\|\n\|[-:| ]+\||- \[[^\]]+\]\()/m);
const report={mdxPages:pages.length,registeredRoutes:routes.length,canonicals:canon.size,brokenInternalLinks:broken,missingRoutes:missing,extraRoutes:extra,duplicatePageIds:[...new Set(dupIds)],homepageMarkdownLeak:Boolean(mdLeak),status:'PASS'};
if(broken.length||missing.length||extra.length||dupIds.length||mdLeak) report.status='FAIL';
console.log(JSON.stringify(report,null,2));
if(report.status!=='PASS') process.exit(1);
