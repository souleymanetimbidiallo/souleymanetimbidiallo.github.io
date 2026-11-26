// Moves the Angular build output (docs/browser) to the GitHub Pages root (docs/).
const fs = require('fs');
const path = require('path');

const dst = path.join(__dirname, '..', 'docs');
const src = path.join(dst, 'browser');

if (!fs.existsSync(src)) {
  console.log('⏭️ Rien à déplacer : docs/browser introuvable.');
  process.exit(0);
}

for (const entry of fs.readdirSync(src)) {
  const from = path.join(src, entry);
  const to = path.join(dst, entry);
  if (fs.existsSync(to)) fs.rmSync(to, { recursive: true, force: true });
  fs.renameSync(from, to);
}
fs.rmSync(src, { recursive: true, force: true });
// The server bundle only serves the prerendering step; it is not published.
fs.rmSync(path.join(dst, 'server'), { recursive: true, force: true });

fs.rmSync(path.join(dst, 'prerendered-routes.json'), { force: true });

// SPA fallback: unknown URLs get an empty client-rendered shell (no prerendered
// content nor hydration state), built from the prerendered home page.
const home = fs.readFileSync(path.join(dst, 'index.html'), 'utf8');
const shell = home
  .replace(/<app-root[\s\S]*<\/app-root>/, '<app-root></app-root>')
  .replace(/<script id="ng-state"[\s\S]*?<\/script>/, '');
if (shell === home || !shell.includes('<app-root></app-root>')) {
  console.error('❌ Impossible de générer 404.html : structure de index.html inattendue.');
  process.exit(1);
}
fs.writeFileSync(path.join(dst, '404.html'), shell);
console.log('✅ 404.html généré (shell client)');

// GitHub Pages: disable Jekyll processing of the Angular files.
fs.writeFileSync(path.join(dst, '.nojekyll'), '');

console.log('✅ Build publié dans docs/.');
