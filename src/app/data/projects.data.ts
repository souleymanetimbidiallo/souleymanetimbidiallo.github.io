export type ProjectCategory = 'web' | 'mobile' | 'data';

export interface LocalizedText {
  fr: string;
  en: string;
}

export interface Project {
  slug: string;
  title: LocalizedText;
  image: string;
  client: string;
  description: LocalizedText;
  date: string;
  category: ProjectCategory;
  images: string[];
  tags?: string[];
  demo?: string;
  repo?: string;
  featured?: boolean;
}

export const PROJECTS: Project[] = [
  {
    slug: 'gui-plus',
    title: {
      fr: 'Gui-Plus',
      en: 'Gui-Plus',
    },
    image: 'assets/img/projects/guiplus224.jpg',
    date: '19/04/2019',
    category: 'web',
    client: 'Gui-Plus Group',
    demo: 'https://guiplusgroup.com',
    description: {
      fr: `Guiplus Group SARL, fondée le 1er avril 2019, est née de la passion de deux frères, Maladho et Souleymane, pour les TIC. Leur ambition est de contribuer au développement de la jeunesse guinéenne grâce aux nouvelles technologies.`,
      en: `Founded on April 1, 2019, Guiplus Group SARL was born from the passion of two brothers, Maladho and Souleymane, for information and communication technologies. Their ambition is to support Guinean youth through digital innovation.`,
    },
    images: [
      'assets/img/projects/guiplus/guiplus1.png',
      'assets/img/projects/guiplus/guiplus2.png',
      'assets/img/projects/guiplus/guiplus3.png',
    ],
    tags: ['Angular', 'Web', 'Digital Media'],
    featured: true,
  },
  {
    slug: 'gestion-demo',
    title: {
      fr: 'Gestion Démographie',
      en: 'Demographic Management',
    },
    image: 'assets/img/projects/gestion-demo.jpg',
    date: '18 Sep. 2018',
    category: 'web',
    client: 'Gouvernement .gn',
    repo: 'https://github.com/souleymanetimbidiallo/gestion-demo',
    description: {
      fr: `Ce projet vise à moderniser l’accès aux services administratifs en Guinée grâce à une plateforme de numérisation des documents. Les citoyens peuvent numériser leurs documents administratifs, simplifier leurs démarches et accéder plus facilement aux services essentiels.`,
      en: `This project aims to modernize access to administrative services in Guinea through a document digitization platform. Citizens can digitize their official documents, simplify procedures, and access essential services more easily.`,
    },
    images: ['assets/img/projects/gestion-demo.jpg'],
    tags: ['Angular', 'OCR', 'Digital Services'],
  },
  {
    slug: 'soodou-shop',
    title: {
      fr: 'Soodou Shop',
      en: 'Soodou Shop',
    },
    image: 'assets/img/projects/soodou-shop.png',
    date: '05/05/2020',
    category: 'web',
    client: 'Soodou Shop',
    repo: 'https://github.com/souleymanetimbidiallo/soodou-shop',
    description: {
      fr: `Projet d’étude, de conception et de réalisation d’un site e-commerce dédié à la vente de produits high-tech.`,
      en: `Study, design, and implementation of an e-commerce website dedicated to high-tech products.`,
    },
    images: ['assets/img/projects/soodou-shop.png'],
    tags: ['E-commerce', 'Angular', 'Web'],
  },
  {
    slug: 'ag35-website',
    title: {
      fr: "Association Guinéenne d'Ille-et-Vilaine (AG35)",
      en: "Guinean Association of Ille-et-Vilaine (AG35)",
    },
    image: 'assets/img/projects/ag35.png',
    date: '19/04/2023',
    category: 'web',
    client: 'AG35',
    repo: 'https://github.com/souleymanetimbidiallo/ag35_website',
    description: {
      fr: `Le site de l’AG35 valorise les actions de solidarité, d’entraide et d’accompagnement socio-professionnel et culturel des Guinéens en Ille-et-Vilaine.`,
      en: `The AG35 website highlights solidarity, mutual support, and socio-professional and cultural integration initiatives for Guineans in Ille-et-Vilaine.`,
    },
    images: [
      'assets/img/projects/ag35.png',
      'assets/img/projects/ag35/ag35_2.png',
    ],
    tags: ['Association', 'Community', 'Website'],
  },
  {
    slug: 'guinea-roads',
    title: {
      fr: 'Guinea-Roads',
      en: 'Guinea-Roads',
    },
    image: 'assets/img/projects/guinea-roads.png',
    date: '08/04/2024',
    category: 'mobile',
    client: 'Guinea-Roads',
    description: {
      fr: `Application mobile de transport urbain permettant de trouver des itinéraires, d’explorer les points d’intérêt à proximité et d’améliorer l’accessibilité des déplacements.`,
      en: `Urban transport mobile application designed to help users find routes, discover nearby places, and improve mobility accessibility.`,
    },
    images: [
      'assets/img/projects/guinea-roads/guinea-roads.png',
      'assets/img/projects/guinea-roads/demo2.png',
    ],
    tags: ['Mobile', 'Transport', 'Navigation'],
  },
  {
    slug: 'examens-gn',
    title: {
      fr: 'Examens nationaux GN 2023',
      en: 'Guinea National Exams 2023',
    },
    image: 'assets/img/projects/examens_gn.jpeg',
    date: '18 Sep. 2023',
    category: 'data',
    client: 'Gui-Plus Group',
    demo: 'https://guiplusgroup.com',
    description: {
      fr: `Analyse de données sur les résultats des examens nationaux de Guinée 2023 à l’aide de Python et de bibliothèques de traitement de données.`,
      en: `Data analysis project on the results of Guinea’s 2023 national exams using Python and data-processing libraries.`,
    },
    images: [
      'assets/img/projects/examens-gn-2023/Capture.PNG',
      'assets/img/projects/examens-gn-2023/demo2.PNG',
    ],
    tags: ['Python', 'Data Analysis', 'Visualization'],
  },
  {
    slug: 'api-guinea-geo',
    title: {
      fr: 'API Guinée Geo',
      en: 'Guinea Geo API',
    },
    image: 'assets/img/projects/api-guinea-geo.png',
    date: '10 Avr. 2024',
    category: 'data',
    client: 'Gui-Plus Group',
    demo: 'https://api-guinea-geo.vercel.app/',
    description: {
      fr: `API donnant un accès libre aux données géographiques de la Guinée pour faciliter le développement d’applications locales.`,
      en: `API providing open access to Guinea’s geographic data to support the development of local applications.`,
    },
    images: [
      'assets/img/projects/api-guinea-geo.png',
      'assets/img/projects/api-guinea-geo/docs-api.jpg',
      'assets/img/projects/api-guinea-geo/test-api.jpg',
    ],
    tags: ['API', 'Geodata', 'Open Data'],
    featured: true,
  },
];