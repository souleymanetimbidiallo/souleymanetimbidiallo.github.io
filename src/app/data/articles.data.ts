export interface LocalizedText {
  fr: string;
  en: string;
}

export interface BlogArticle {
  slug: string;
  title: LocalizedText;
  date: LocalizedText;
  summary: LocalizedText;
  image?: string;
}

export const BLOG_ARTICLES: BlogArticle[] = [
  {
    slug: 'guinea-geo-api-qualite-donnees',
    title: {
      fr: 'Guinea Geo API : rendre la qualité des données visible',
      en: 'Guinea Geo API: Making Data Quality Visible',
    },
    date: { fr: '31 octobre 2026', en: 'October 31, 2026' },
    summary: {
      fr: 'Couverture partielle, populations datées, sources et périmètres : comment le code distingue une donnée vérifiée d’une valeur encore incertaine.',
      en: 'Partial coverage, dated populations, sources and boundaries: how the code distinguishes verified data from values that remain uncertain.',
    },
    image: 'assets/img/projects/api-guinea-geo-cover-premium-v2.png',
  },
  {
    slug: 'gn-exams-excel-graphiques-python',
    title: {
      fr: 'GN Exams : d’Excel aux graphiques avec Python',
      en: 'GN Exams: From Excel to Charts with Python',
    },
    date: { fr: '31 octobre 2026', en: 'October 31, 2026' },
    summary: {
      fr: 'Dans le code de la version CEE : lecture du classeur, normalisation des mentions, stockage Parquet, requêtes DuckDB et graphiques Plotly.',
      en: 'Inside the CEE version: workbook loading, distinction normalization, Parquet storage, DuckDB queries and Plotly charts.',
    },
    image: 'assets/img/projects/gn-exams-2026/cover.png',
  },
  {
    slug: 'stabiliser-portfolio-angular-github-pages',
    title: {
      fr: 'Stabiliser un portfolio Angular pour GitHub Pages',
      en: 'Stabilizing an Angular Portfolio for GitHub Pages',
    },
    date: {
      fr: '8 Juillet 2026',
      en: 'July 8, 2026',
    },
    summary: {
      fr: 'Retour concret sur le nettoyage du template, le SEO, la performance et la génération statique du portfolio.',
      en: 'A practical breakdown of template cleanup, SEO, performance, and static generation for the portfolio.',
    },
    image: 'assets/img/og-souleymane-diallo.jpg',
  },
  {
    slug: 'concevoir-api-geographique-guinee',
    title: {
      fr: 'Concevoir une API géographique pour la Guinée',
      en: 'Designing a Geographic API for Guinea',
    },
    date: {
      fr: '8 Juillet 2026',
      en: 'July 8, 2026',
    },
    summary: {
      fr: 'Comment structurer une API REST utile, documentée et simple à tester autour des régions et préfectures.',
      en: 'How to structure a useful, documented, and testable REST API around regions and prefectures.',
    },
    image: 'assets/img/projects/api-guinea-geo-cover-premium-v2.png',
  },
];
