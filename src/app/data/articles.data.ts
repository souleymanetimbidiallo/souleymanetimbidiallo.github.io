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
    slug: 'apprendre-angular-en-2024',
    title: {
      fr: 'Apprendre Angular en 2024',
      en: 'Learning Angular in 2024',
    },
    date: {
      fr: '10 Avril 2025',
      en: 'April 10, 2025',
    },
    summary: {
      fr: 'Pourquoi Angular reste un bon choix cette année...',
      en: 'Why Angular remains a strong choice this year...',
    },
    image: 'assets/articles/angular.png',
  },
  {
    slug: 'carriere-developpeur-freelance',
    title: {
      fr: 'Carrière de développeur freelance',
      en: 'Freelance Developer Career',
    },
    date: {
      fr: '02 Mars 2025',
      en: 'March 2, 2025',
    },
    summary: {
      fr: 'Les avantages et défis du travail en freelance.',
      en: 'The benefits and challenges of freelance work.',
    },
    image: 'assets/articles/freelance-cover.jpg',
  },
];