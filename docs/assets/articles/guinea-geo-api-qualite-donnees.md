Une fiche peut afficher une population et pourtant laisser une question essentielle sans réponse : ce chiffre décrit quel territoire, à quelle date ? C’est une difficulté concrète dans Guinea Geo API, où les observations du recensement de 2025 côtoient une mise à jour administrative de 2026.

Le projet associe une API REST et un explorateur des subdivisions guinéennes. Pour rendre ces données utilisables, j’ai séparé leur présence dans la base, leur provenance et les conditions dans lesquelles on peut les comparer. Voici comment cette distinction apparaît dans le code.

## Une base consultable ne garantit pas une couverture complète

Les endpoints permettent de parcourir régions, préfectures, sous-préfectures, communes et quartiers. Ces niveaux n’ont pas tous la même couverture. Le référentiel du projet indique notamment que les communes de l’intérieur et les quartiers ne sont pas couverts exhaustivement.

Un lieu absent des résultats n’est donc pas nécessairement un lieu inexistant. Le site signale cette couverture partielle, et l’endpoint `/data-sources` expose les références et les limites de la mise à jour.

La même prudence s’applique aux relations entre subdivisions. Certains rattachements restent marqués `parentStatus: "pending"`. Conserver un ancien lien pour l’historique ne suffit pas à le confirmer pour le découpage actuel.

## Une population est une observation datée

Le modèle conserve des observations de population avec une année, une source et un périmètre géographique. La réponse publique expose notamment :

- `populationReferenceYear` : l’année de référence ;
- `populationStatus` : résultat préliminaire, définitif ou indisponible ;
- `populationSource` : la publication et, lorsqu’elles sont connues, les pages du rapport ;
- `populationGeographicReference` : le territoire auquel se rapporte l’observation ;
- `populationBoundaryCompatibility` : la compatibilité vérifiée, ou non évaluée, avec le périmètre actuel.

Une observation de 2025 peut être vérifiée dans sa source tout en restant marquée `not-assessed` pour sa correspondance avec les frontières administratives actuelles. Ce sont deux contrôles différents.

Le référentiel RGPH-4 du projet est identifié comme préliminaire. Sa date de publication ne change pas son année de référence : une publication en 2026 ne transforme pas une observation de 2025 en estimation pour 2026.

## Écarter une valeur plutôt que lui donner une fausse précision

Dans `utils/populationResponse.js`, `selectPopulation` sélectionne une observation après validation. La sérialisation utilise cette sélection :

```javascript
population: observation?.population ?? null,
populationReferenceYear: observation?.year ?? null,
populationStatus: observation?.publicationStatus || 'unavailable',
```

Ces lignes sont extraites d’un objet de réponse. Si aucune observation ne passe les contrôles, un ancien chiffre enregistré dans le champ `population` ne sert pas de remplacement automatique.

Le validateur examine notamment la valeur, l’année, le statut de publication et la source. Pour le référentiel RGPH-4 intégré, il compare aussi l’observation aux données versionnées du projet et à l’empreinte du document source. Cette empreinte identifie le document utilisé ; elle ne prouve pas à elle seule la justesse du chiffre.

Un autre contrôle empêche d’attribuer à une nouvelle entité une observation antérieure à sa création. Le rapprochement par nom ne suffit pas à établir qu’il s’agit du même territoire.

Les anciennes valeurs restent consultables avec `includeHistory=true`, dans `populationHistory`. Elles ne remplacent pas la population sélectionnée dans la réponse principale.

## Un total exige plus que des valeurs numériques

La fonction `getStats` utilise le même mécanisme de sélection que les fiches. Elle vérifie ensuite que toutes les unités ont une population retenue, que les périmètres actuels sont confirmés et que les années concordent :

```javascript
const complete = count > 0 && verified.length === count && matching.length === count && years.length === 1;
```

Lorsque ces conditions manquent, `totalPopulation` reste `null` pour un ensemble non vide. L’objet `populationCoverage` explique la situation : nombre d’observations vérifiées, correspondances avec les périmètres actuels et année commune éventuelle.

Le total national du référentiel de recensement est disponible séparément sur `/populations/rgph4-2025`. Il n’est pas présenté comme une somme validée des unités administratives actuelles.

## Rendre les limites visibles dans l’interface

Dans la fiche Conakry de l’explorateur, l’année de population, la publication et la référence territoriale sont affichées ensemble. La superficie actuelle reste indiquée comme indisponible lorsqu’elle n’est pas vérifiée ; une ancienne valeur peut être consultée séparément.

![Fiche Conakry : année de référence, sources et limites des données](/assets/img/projects/api-guinea-geo/conakry-detail.png)

Les tests du projet couvrent aussi plusieurs cas qui pourraient produire une réponse trompeuse : observation récente non vérifiée, année future, valeur contradictoire avec le référentiel ou population attribuée au mauvais niveau administratif.

La qualité des données se voit ici dans les réponses que l’application accepte de ne pas fournir. Un champ `null`, accompagné de son contexte, permet au développeur de décider quoi afficher et quoi exclure de ses calculs.

## Consulter les références

- [Sources et limites de la mise à jour administrative](https://api-guinea-geo.vercel.app/data-sources).
- [Référentiel démographique RGPH-4 2025 du projet](https://api-guinea-geo.vercel.app/populations/rgph4-2025).
- [Sélection et sérialisation des populations dans le code](https://github.com/souleymanetimbidiallo/api-guinea-geo/blob/main/utils/populationResponse.js).
- [Règles de calcul des statistiques](https://github.com/souleymanetimbidiallo/api-guinea-geo/blob/main/utils/administrativeStats.js).

[Voir la présentation de Guinea Geo API](/projets/api-guinea-geo).
