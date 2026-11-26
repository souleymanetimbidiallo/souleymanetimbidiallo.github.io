// Writes prerender-routes.txt: every page the site serves, so the Angular
// build prerenders each one to static HTML (read by search engines and link previews).
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const readSlugs = (file, pattern) => {
  const source = fs.readFileSync(path.join(root, 'src', 'app', 'data', file), 'utf8');
  return [...source.matchAll(pattern)].map((match) => match[1]);
};

const projectSlugs = readSlugs('projects.data.ts', /^ {4}slug: '([a-z0-9-]+)',$/gm);
const legacySlugs = readSlugs('projects.data.ts', /^ {4}legacySlugs: \[([^\]]+)\],$/gm)
  .flatMap((list) => [...list.matchAll(/'([a-z0-9-]+)'/g)].map((match) => match[1]));
const articleSlugs = readSlugs('articles.data.ts', /^ {4}slug: '([a-z0-9-]+)',$/gm);

if (!projectSlugs.length || !articleSlugs.length) {
  console.error('❌ Aucun slug trouvé : le format de projects.data.ts ou articles.data.ts a changé.');
  process.exit(1);
}

const routes = [
  '/',
  '/parcours',
  '/blog',
  ...[...projectSlugs, ...legacySlugs].map((slug) => `/projets/${slug}`),
  ...articleSlugs.map((slug) => `/blog/${slug}`),
];

fs.writeFileSync(path.join(root, 'prerender-routes.txt'), `${routes.join('\n')}\n`);
console.log(`✅ ${routes.length} routes à prérendre (${projectSlugs.length} projets, ${legacySlugs.length} anciens slugs, ${articleSlugs.length} articles)`);
