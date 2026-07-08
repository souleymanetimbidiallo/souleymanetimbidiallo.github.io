Un portfolio technique ne doit pas seulement montrer des écrans. Il doit aussi prouver que le projet est maintenable, rapide et prêt à être déployé.

Sur ce portfolio Angular, l'objectif était simple : garder l'identité visuelle, mais retirer ce qui venait du template et qui n'apportait plus de valeur.

## Le problème

Le projet contenait encore plusieurs éléments typiques d'un template Bootstrap :

- scripts globaux inutilisés ;
- assets vendor copiés dans le build final ;
- galeries dépendantes de librairies non nécessaires ;
- textes trop génériques ;
- métadonnées SEO limitées ;
- styles hérités qui rendaient certains états visuels fragiles.

Ce n'était pas bloquant pour afficher le site, mais ça rendait le portfolio moins propre techniquement.

## Les décisions prises

La première étape a été de réduire la surface du template. Les scripts globaux ont été retirés, les composants ont repris la logique dont ils avaient réellement besoin, et le CSS Bootstrap complet a été remplacé par un sous-ensemble plus léger.

Ensuite, les sections ont été repositionnées autour de preuves :

- projets mis en avant avec rôle, impact et stack ;
- bloc contact plus direct ;
- statistiques remplacées par des signaux concrets ;
- Open Graph et métadonnées SEO ajoutés ;
- génération finale dans `docs/` pour GitHub Pages.

## Ce que ça améliore

Le portfolio devient plus crédible parce qu'il ne dépend plus d'un comportement caché dans un vieux fichier JavaScript. Les états importants, comme le header au scroll, sont gérés directement dans Angular.

Le build est aussi plus propre : moins d'assets copiés, moins de scripts inutiles, et une sortie statique adaptée au déploiement.

## Ce que je retiens

Un portfolio n'est pas seulement une vitrine. C'est aussi un petit produit. Même sur un site personnel, la qualité se voit dans les détails : navigation, performance, SEO, lisibilité, structure des données et cohérence du contenu.

Le meilleur signal technique n'est pas d'ajouter beaucoup d'effets. C'est de montrer que chaque partie du site a une raison d'exister.
