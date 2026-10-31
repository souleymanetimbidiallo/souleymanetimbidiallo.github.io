Avant d’afficher un graphique, il faut réussir à lire le fichier. Sur la version CEE de GN Exams 2026, le premier détail à régler était dans Excel : la première ligne contenait le titre du document, et la deuxième les noms des colonnes.

GN Exams réunit plusieurs applications autour des résultats des examens guinéens. Dans cet article, je prends la version CEE comme exemple pour expliquer le passage du fichier source aux recherches, aux tableaux et aux graphiques. Les extraits viennent de son fichier `app.py` ; les versions BEPC et BAC ont leur propre organisation.

## Lire le fichier au bon endroit

Le chargement parcourt les feuilles du classeur avec Pandas. Voici la ligne utilisée à l’intérieur de cette boucle :

```python
df = pd.read_excel(file_path, sheet_name=sheet_name, header=1, dtype=str)
```

`header=1` indique à Pandas que l’en-tête est sur la deuxième ligne, l’index commençant à zéro. Sans ce réglage, le titre du document devient un nom de colonne et la suite du traitement ne travaille plus sur la structure attendue.

Le paramètre `dtype=str` conserve les valeurs sous forme de texte à la lecture. C’est utile pour les identifiants comme le PV : je ne les traite pas comme des quantités à additionner.

Le traitement retire ensuite les lignes et colonnes entièrement vides, réunit les feuilles et conserve leur nom dans une colonne `Feuille`. Il ajoute aussi un type d’enseignement à partir du nom de la feuille.

Une limite de ce chargement mérite d’être signalée : lorsqu’une feuille comporte au moins huit colonnes, le code retient les huit premières et leur attribue les noms attendus. Cela suppose que leur ordre reste stable. Pour accepter d’autres formats, une validation explicite du schéma serait préférable.

## Regrouper les mentions qui veulent dire la même chose

Dans un graphique, `T.Bien`, `Très Bien` et `tresbien` ne doivent pas devenir trois catégories différentes. La fonction `normalize_mention` s’appuie sur une normalisation du texte : espaces retirés aux extrémités, passage en minuscules et suppression des accents pour la comparaison.

Elle ramène notamment `tbien`, `tresbien` et `t.bien` à `Très Bien`. Une valeur vide devient `Sans mention`. La mention d’origine reste disponible, et la valeur regroupée est ajoutée séparément :

```python
data["Mention_Normalisée"] = data["Mention"].map(normalize_mention)
```

Cette séparation permet d’utiliser une catégorie cohérente dans les calculs tout en conservant la valeur lue dans le fichier.

## Préparer les données, puis les relire

La version CEE propose une conversion du classeur traité vers Parquet :

```python
df.to_parquet(PARQUET_FILE, index=False, engine="pyarrow")
```

Au chargement, l’application lit le fichier Parquet s’il existe. Sinon, elle revient au classeur Excel. Les fonctions de lecture utilisent aussi `st.cache_data` de Streamlit.

Cela sépare la préparation du classeur de son utilisation dans l’interface. En contrepartie, le fichier Parquet doit rester synchronisé avec la source : remplacer Excel sans régénérer le fichier dérivé peut laisser des données anciennes à l’écran. Je ne présente pas ici de gain de temps chiffré, faute de mesure comparative.

## Interroger le tableau filtré avec DuckDB

Les filtres de l’interface produisent un DataFrame nommé `filtered`. Dans l’onglet des écoles, ce tableau est enregistré dans une connexion DuckDB en mémoire :

```python
con = duckdb.connect(database=":memory:")
con.register("filtered_view", filtered)
```

La requête regroupe ensuite les lignes par école et DPE, compte les candidats et additionne les mentions. Elle écarte les noms d’école vides, trie par nombre de lignes et conserve les cent premiers résultats.

L’ordre de ce tableau a donc un sens précis : il met en avant les effectifs présents dans la sélection. Il ne faut pas le lire comme un classement par taux de réussite. Le titre d’un tableau et la méthode de tri doivent permettre au lecteur de comprendre cette différence.

## Passer des groupes aux graphiques

Pour la répartition des mentions, Pandas calcule les effectifs et Plotly construit le graphique :

```python
mention_stats = filtered.groupby("Mention_Normalisée").size().reset_index(name="Nombre").sort_values("Nombre", ascending=False)
st.plotly_chart(px.bar(mention_stats, x="Mention_Normalisée", y="Nombre", text="Nombre"), use_container_width=True)
```

Streamlit rassemble les filtres, les tableaux et les graphiques dans une même interface. La version CEE propose aussi des fiches école et élève, un export CSV des résultats filtrés et une vue cartographique.

## Ce qu’il faut regarder derrière un résultat

Un effectif dépend du fichier chargé et des filtres actifs. Un taux de réussite demanderait en plus un dénominateur adapté : on ne peut pas le déduire d’une liste d’admis seule. De même, un score fondé sur les mentions exprime une règle de calcul ; il ne résume pas à lui seul la qualité d’un établissement.

Le détail `header=1` illustre bien le travail derrière l’interface : une décision de lecture influence la structure des données, puis les agrégations et enfin ce que le visiteur voit. C’est ce parcours que je veux rendre visible avec GN Exams.

[Voir le projet GN Exams et les trois démos](/projets/gn-exams-2026).
