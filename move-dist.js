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

console.log('✅ Dossier "browser" déplacé dans "docs" avec succès.');
