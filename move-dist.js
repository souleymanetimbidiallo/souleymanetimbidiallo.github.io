// move-dist.js
const fs = require('fs');
const path = require('path');

// DOIT pointer vers docs/browser (sortie Angular)
const src = path.join(__dirname, 'docs', 'browser');
// Destination finale = docs (racine GitHub Pages)
const dst = path.join(__dirname, 'docs');

if (!fs.existsSync(src)) {
  console.log('⏭️ Rien à déplacer : docs/browser introuvable.');
  process.exit(0);
}
if (!fs.existsSync(dst)) fs.mkdirSync(dst, { recursive: true });

// Déplace/écrase tout ce qui est dans docs/browser → docs/
for (const entry of fs.readdirSync(src)) {
  const from = path.join(src, entry);
  const to = path.join(dst, entry);
  if (fs.existsSync(to)) fs.rmSync(to, { recursive: true, force: true });
  fs.renameSync(from, to);
}

// Supprime le dossier browser
fs.rmSync(src, { recursive: true, force: true });

// SPA fix : index.html → 404.html
const indexPath = path.join(dst, 'index.html');
const notFoundPath = path.join(dst, '404.html');
if (fs.existsSync(indexPath)) {
  fs.copyFileSync(indexPath, notFoundPath);
  console.log('✅ 404.html généré depuis index.html');
}

// SEO : une copie de index.html par route connue, pour que GitHub Pages réponde
// en HTTP 200 (au lieu de passer par 404.html) sur les liens directs.
if (fs.existsSync(indexPath)) {
  const readSlugs = (file, pattern) => {
    const source = fs.readFileSync(path.join(__dirname, 'src', 'app', 'data', file), 'utf8');
    return [...source.matchAll(pattern)].map((match) => match[1]);
  };
  const projectSlugs = readSlugs('projects.data.ts', /^ {4}slug: '([a-z0-9-]+)',$/gm);
  const legacySlugs = readSlugs('projects.data.ts', /^ {4}legacySlugs: \[([^\]]+)\],$/gm)
    .flatMap((list) => [...list.matchAll(/'([a-z0-9-]+)'/g)].map((match) => match[1]));
  const articleSlugs = readSlugs('articles.data.ts', /^ {4}slug: '([a-z0-9-]+)',$/gm);
  const routes = [
    'parcours',
    'blog',
    ...[...projectSlugs, ...legacySlugs].map((slug) => `projets/${slug}`),
    ...articleSlugs.map((slug) => `blog/${slug}`),
  ];
  for (const route of routes) {
    const dir = path.join(dst, route);
    fs.mkdirSync(dir, { recursive: true });
    fs.copyFileSync(indexPath, path.join(dir, 'index.html'));
  }
  console.log(`✅ ${routes.length} pages de route générées (${projectSlugs.length} projets, ${articleSlugs.length} articles)`);
}

// GitHub Pages : désactive le traitement Jekyll pour les fichiers Angular.
fs.writeFileSync(path.join(dst, '.nojekyll'), '');

console.log('✅ Dossier "browser" déplacé dans "docs" avec succès.');
