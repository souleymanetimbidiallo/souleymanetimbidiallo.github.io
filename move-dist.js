// move-dist.js
const fs = require('fs');
const path = require('path');

const source = path.join(__dirname, 'docs', 'browser');
const destination = path.join(__dirname, 'docs');

// Lire tous les fichiers du dossier browser
fs.readdirSync(source).forEach(file => {
  const srcPath = path.join(source, file);
  const destPath = path.join(destination, file);
  fs.renameSync(srcPath, destPath); // déplace chaque fichier
});

// Supprimer le dossier browser
fs.rmSync(source, { recursive: true, force: true });
console.log('✅ Dossier browser déplacé avec succès dans docs/');
