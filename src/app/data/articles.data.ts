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
    image: 'assets/img/projects/api-guinea-geo.png',
  },
];
