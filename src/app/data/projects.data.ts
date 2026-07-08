export type ProjectCategory = 'web' | 'mobile' | 'data';

export interface LocalizedText {
  fr: string;
  en: string;
}

export interface ProjectCaseSection {
  title: LocalizedText;
  items: LocalizedText[];
}

export interface ProjectProofBlock {
  title: LocalizedText;
  variant: 'code' | 'flow' | 'list';
  lines: LocalizedText[];
}

export interface Project {
  slug: string;
  title: LocalizedText;
  image: string;
  client: string;
  description: LocalizedText;
  role: LocalizedText;
  impact: LocalizedText;
  highlights: LocalizedText[];
  caseStudy?: ProjectCaseSection[];
  proofBlocks?: ProjectProofBlock[];
  date: string;
  category: ProjectCategory;
  images: string[];
  tags?: string[];
  stack?: string[];
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
      fr: `Plateforme web de présentation et de publication pour Gui-Plus Group, pensée pour rendre les activités, services et contenus de l'organisation accessibles en ligne.`,
      en: `Presentation and publishing website for Gui-Plus Group, designed to make the organization's activities, services, and content accessible online.`,
    },
    role: {
      fr: 'Co-fondateur et développeur full-stack',
      en: 'Co-founder and full-stack developer',
    },
    impact: {
      fr: 'A donné une présence numérique structurée au groupe et un point d’entrée public pour ses initiatives TIC.',
      en: 'Created a structured digital presence for the group and a public entry point for its ICT initiatives.',
    },
    highlights: [
      {
        fr: 'Conception de l’interface publique et organisation des contenus.',
        en: 'Designed the public interface and organized the site content.',
      },
      {
        fr: 'Mise en ligne d’un site vitrine adapté aux actions de communication du groupe.',
        en: 'Published a showcase website suited to the group’s communication needs.',
      },
      {
        fr: 'Structuration des pages pour présenter services, projets et informations clés.',
        en: 'Structured pages to present services, projects, and key information.',
      },
    ],
    images: [
      'assets/img/projects/guiplus/guiplus1.png',
      'assets/img/projects/guiplus/guiplus2.png',
      'assets/img/projects/guiplus/guiplus3.png',
    ],
    tags: ['Angular', 'Web', 'Digital Media'],
    stack: ['Angular', 'TypeScript', 'Bootstrap', 'Responsive UI'],
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
      fr: `Prototype de plateforme de gestion démographique et de numérisation documentaire pour simplifier l’accès aux démarches administratives.`,
      en: `Prototype demographic management and document digitization platform designed to simplify access to administrative procedures.`,
    },
    role: {
      fr: 'Développeur full-stack',
      en: 'Full-stack developer',
    },
    impact: {
      fr: 'Explore une approche plus rapide et centralisée pour gérer des informations administratives sensibles.',
      en: 'Explores a faster and more centralized approach to handling sensitive administrative information.',
    },
    highlights: [
      {
        fr: 'Modélisation des données administratives et des flux de gestion.',
        en: 'Modeled administrative data and management flows.',
      },
      {
        fr: 'Création d’une interface de consultation et de suivi des dossiers.',
        en: 'Created an interface for viewing and tracking records.',
      },
      {
        fr: 'Intégration d’une logique orientée numérisation et classement documentaire.',
        en: 'Integrated logic focused on document digitization and classification.',
      },
    ],
    images: ['assets/img/projects/gestion-demo.jpg'],
    tags: ['Angular', 'OCR', 'Digital Services'],
    stack: ['Angular', 'TypeScript', 'REST API', 'OCR'],
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
      fr: `Application e-commerce dédiée aux produits high-tech, couvrant le catalogue, la navigation produit et le parcours d’achat.`,
      en: `E-commerce application for high-tech products, covering catalog browsing, product navigation, and the shopping flow.`,
    },
    role: {
      fr: 'Concepteur et développeur web',
      en: 'Web designer and developer',
    },
    impact: {
      fr: 'Projet complet de conception produit, utile pour démontrer la construction d’un parcours marchand de bout en bout.',
      en: 'Complete product design project demonstrating an end-to-end commerce experience.',
    },
    highlights: [
      {
        fr: 'Création d’un catalogue produit avec présentation claire des articles.',
        en: 'Built a product catalog with clear item presentation.',
      },
      {
        fr: 'Conception du parcours utilisateur pour explorer et sélectionner les produits.',
        en: 'Designed the user flow to browse and select products.',
      },
      {
        fr: 'Mise en place d’une base d’interface e-commerce réutilisable.',
        en: 'Implemented a reusable e-commerce interface foundation.',
      },
    ],
    images: ['assets/img/projects/soodou-shop.png'],
    tags: ['E-commerce', 'Angular', 'Web'],
    stack: ['Angular', 'TypeScript', 'HTML', 'CSS'],
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
      fr: `Site associatif pour présenter les actions, actualités et ressources de l’AG35 auprès de sa communauté.`,
      en: `Association website presenting AG35 actions, news, and resources to its community.`,
    },
    role: {
      fr: 'Développeur frontend',
      en: 'Frontend developer',
    },
    impact: {
      fr: 'Aide l’association à centraliser sa communication et à rendre ses initiatives plus visibles.',
      en: 'Helps the association centralize communication and make its initiatives more visible.',
    },
    highlights: [
      {
        fr: 'Structuration des sections publiques: association, actions, actualités et contact.',
        en: 'Structured public sections: association, actions, news, and contact.',
      },
      {
        fr: 'Interface responsive adaptée à une consultation mobile et desktop.',
        en: 'Responsive interface adapted for mobile and desktop browsing.',
      },
      {
        fr: 'Mise en avant du contenu communautaire avec une navigation simple.',
        en: 'Highlighted community content through simple navigation.',
      },
    ],
    images: [
      'assets/img/projects/ag35.png',
      'assets/img/projects/ag35/ag35_2.png',
    ],
    tags: ['Association', 'Community', 'Website'],
    stack: ['Angular', 'TypeScript', 'Bootstrap', 'Responsive UI'],
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
      fr: `Application mobile de transport urbain pour rechercher des itinéraires, explorer les points d’intérêt proches et améliorer l’orientation des usagers.`,
      en: `Urban transport mobile app for route search, nearby point-of-interest discovery, and better user navigation.`,
    },
    role: {
      fr: 'Développeur mobile',
      en: 'Mobile developer',
    },
    impact: {
      fr: 'Met l’accent sur un besoin local concret: rendre les déplacements urbains plus lisibles et accessibles.',
      en: 'Focuses on a concrete local need: making urban mobility easier to understand and access.',
    },
    highlights: [
      {
        fr: 'Conception d’un parcours mobile centré sur la recherche d’itinéraires.',
        en: 'Designed a mobile flow centered on route discovery.',
      },
      {
        fr: 'Présentation des points d’intérêt pour contextualiser les trajets.',
        en: 'Presented points of interest to add context to trips.',
      },
      {
        fr: 'Travail sur l’expérience utilisateur pour un usage rapide en mobilité.',
        en: 'Worked on user experience for quick use while on the move.',
      },
    ],
    caseStudy: [
      {
        title: { fr: 'Problème', en: 'Problem' },
        items: [
          {
            fr: 'Les informations de transport local sont souvent dispersées, difficiles à consulter rapidement et peu adaptées à un usage mobile.',
            en: 'Local transport information is often fragmented, hard to check quickly, and poorly adapted to mobile usage.',
          },
          {
            fr: 'L’utilisateur doit pouvoir identifier un trajet ou un point d’intérêt sans passer par un parcours complexe.',
            en: 'Users need to identify a route or nearby point of interest without going through a complex flow.',
          },
        ],
      },
      {
        title: { fr: 'Décisions techniques', en: 'Technical decisions' },
        items: [
          {
            fr: 'Prioriser une interface mobile simple, avec peu d’étapes entre la recherche et le résultat.',
            en: 'Prioritized a simple mobile interface with few steps between search and result.',
          },
          {
            fr: 'Structurer l’expérience autour de la carte, des itinéraires et des points d’intérêt plutôt qu’autour de longs formulaires.',
            en: 'Structured the experience around maps, routes, and points of interest instead of long forms.',
          },
          {
            fr: 'Prévoir des composants réutilisables pour présenter lieux, trajets et informations contextuelles.',
            en: 'Planned reusable components to present places, routes, and contextual information.',
          },
        ],
      },
      {
        title: { fr: 'Livrables', en: 'Deliverables' },
        items: [
          {
            fr: 'Écrans mobiles pour la recherche d’itinéraires et l’exploration de lieux.',
            en: 'Mobile screens for route search and place discovery.',
          },
          {
            fr: 'Parcours utilisateur optimisé pour une consultation rapide en déplacement.',
            en: 'User flow optimized for quick consultation while moving.',
          },
        ],
      },
    ],
    proofBlocks: [
      {
        title: { fr: 'Flux utilisateur mobile', en: 'Mobile user flow' },
        variant: 'flow',
        lines: [
          { fr: 'Recherche', en: 'Search' },
          { fr: 'Itinéraires', en: 'Routes' },
          { fr: 'Points proches', en: 'Nearby places' },
          { fr: 'Détails trajet', en: 'Trip details' },
        ],
      },
      {
        title: { fr: 'Priorités UX', en: 'UX priorities' },
        variant: 'list',
        lines: [
          {
            fr: 'Limiter le nombre d’étapes avant le résultat.',
            en: 'Limit the number of steps before showing a result.',
          },
          {
            fr: 'Présenter les informations utiles dans un format consultable en mobilité.',
            en: 'Present useful information in a format suited to mobile use.',
          },
          {
            fr: 'Garder une navigation claire entre carte, trajet et lieux.',
            en: 'Keep navigation clear between map, route, and places.',
          },
        ],
      },
    ],
    images: [
      'assets/img/projects/guinea-roads/guinea-roads.png',
      'assets/img/projects/guinea-roads/demo2.png',
    ],
    tags: ['Mobile', 'Transport', 'Navigation'],
    stack: ['Mobile UI', 'Maps', 'Geolocation', 'Navigation UX'],
    featured: true,
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
      fr: `Analyse des résultats des examens nationaux guinéens 2023 avec Python, nettoyage de données et visualisations pour rendre les tendances plus lisibles.`,
      en: `Analysis of Guinea’s 2023 national exam results using Python, data cleaning, and visualizations to make trends easier to read.`,
    },
    role: {
      fr: 'Data analyst / développeur Python',
      en: 'Data analyst / Python developer',
    },
    impact: {
      fr: 'Transforme des résultats bruts en visualisations exploitables pour mieux comprendre la répartition des performances.',
      en: 'Turns raw results into usable visualizations to better understand performance distribution.',
    },
    highlights: [
      {
        fr: 'Nettoyage et préparation des données avant analyse.',
        en: 'Cleaned and prepared data before analysis.',
      },
      {
        fr: 'Production de visualisations pour comparer les résultats et tendances.',
        en: 'Produced visualizations to compare results and trends.',
      },
      {
        fr: 'Mise en forme des conclusions pour une lecture non technique.',
        en: 'Formatted findings for non-technical readers.',
      },
    ],
    caseStudy: [
      {
        title: { fr: 'Problème', en: 'Problem' },
        items: [
          {
            fr: 'Les résultats bruts sont difficiles à lire directement et ne permettent pas d’identifier rapidement les tendances importantes.',
            en: 'Raw results are hard to read directly and do not make important trends easy to identify.',
          },
          {
            fr: 'Le projet devait transformer ces données en supports plus accessibles pour l’analyse et la communication.',
            en: 'The project needed to turn this data into more accessible material for analysis and communication.',
          },
        ],
      },
      {
        title: { fr: 'Décisions techniques', en: 'Technical decisions' },
        items: [
          {
            fr: 'Utiliser Python pour nettoyer, structurer et explorer les données avant visualisation.',
            en: 'Used Python to clean, structure, and explore the data before visualization.',
          },
          {
            fr: 'Séparer les étapes de préparation des données et de production des graphiques pour rendre l’analyse plus maintenable.',
            en: 'Separated data preparation and chart generation steps to make the analysis easier to maintain.',
          },
          {
            fr: 'Privilégier des visualisations compréhensibles par un public non technique.',
            en: 'Prioritized visualizations understandable by non-technical readers.',
          },
        ],
      },
      {
        title: { fr: 'Livrables', en: 'Deliverables' },
        items: [
          {
            fr: 'Jeux de données nettoyés et prêts à être analysés.',
            en: 'Cleaned datasets ready for analysis.',
          },
          {
            fr: 'Graphiques et vues synthétiques pour comparer les résultats.',
            en: 'Charts and summary views for comparing results.',
          },
        ],
      },
    ],
    proofBlocks: [
      {
        title: { fr: 'Pipeline data', en: 'Data pipeline' },
        variant: 'flow',
        lines: [
          { fr: 'Données brutes', en: 'Raw data' },
          { fr: 'Nettoyage Python', en: 'Python cleaning' },
          { fr: 'Analyse', en: 'Analysis' },
          { fr: 'Visualisations', en: 'Visualizations' },
        ],
      },
      {
        title: { fr: 'Exemple de traitement', en: 'Processing example' },
        variant: 'code',
        lines: [
          { fr: 'load results dataset', en: 'load results dataset' },
          { fr: 'clean missing or inconsistent values', en: 'clean missing or inconsistent values' },
          { fr: 'group by exam, region and performance level', en: 'group by exam, region and performance level' },
          { fr: 'generate comparison charts', en: 'generate comparison charts' },
        ],
      },
      {
        title: { fr: 'Ce que l’analyse rend lisible', en: 'What the analysis makes readable' },
        variant: 'list',
        lines: [
          {
            fr: 'Comparer les tendances entre examens et zones géographiques.',
            en: 'Compare trends between exams and geographic areas.',
          },
          {
            fr: 'Identifier les écarts de performance de manière plus visuelle.',
            en: 'Identify performance gaps in a more visual way.',
          },
        ],
      },
    ],
    images: [
      'assets/img/projects/examens-gn-2023/Capture.PNG',
      'assets/img/projects/examens-gn-2023/demo2.PNG',
    ],
    tags: ['Python', 'Data Analysis', 'Visualization'],
    stack: ['Python', 'Pandas', 'Data Cleaning', 'Visualization'],
    featured: true,
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
      fr: `API publique donnant accès aux données géographiques de la Guinée afin d’aider les développeurs à créer plus rapidement des applications locales.`,
      en: `Public API exposing Guinea geographic data to help developers build local applications faster.`,
    },
    role: {
      fr: 'Concepteur API et développeur backend',
      en: 'API designer and backend developer',
    },
    impact: {
      fr: 'Réduit la friction pour intégrer les régions, préfectures et données géographiques guinéennes dans des produits numériques.',
      en: 'Reduces friction when integrating Guinean regions, prefectures, and geographic data into digital products.',
    },
    highlights: [
      {
        fr: 'Conception d’endpoints lisibles pour exposer les données géographiques.',
        en: 'Designed clear endpoints to expose geographic data.',
      },
      {
        fr: 'Documentation et exemples pour faciliter l’intégration par d’autres développeurs.',
        en: 'Added documentation and examples to simplify integration for other developers.',
      },
      {
        fr: 'Déploiement public pour rendre l’API consultable et testable en ligne.',
        en: 'Public deployment to make the API browsable and testable online.',
      },
    ],
    caseStudy: [
      {
        title: { fr: 'Problème', en: 'Problem' },
        items: [
          {
            fr: 'Les développeurs qui construisent des produits liés à la Guinée ont besoin de données géographiques fiables et faciles à intégrer.',
            en: 'Developers building products related to Guinea need reliable geographic data that is easy to integrate.',
          },
          {
            fr: 'Sans API dédiée, ces données doivent souvent être recréées, copiées manuellement ou intégrées de manière non standardisée.',
            en: 'Without a dedicated API, this data often has to be recreated, copied manually, or integrated in a non-standard way.',
          },
        ],
      },
      {
        title: { fr: 'Décisions techniques', en: 'Technical decisions' },
        items: [
          {
            fr: 'Concevoir des endpoints REST simples, explicites et testables depuis un navigateur ou un client API.',
            en: 'Designed simple, explicit REST endpoints testable from a browser or API client.',
          },
          {
            fr: 'Organiser les données pour faciliter la recherche par régions, préfectures et informations associées.',
            en: 'Organized data to simplify lookup by regions, prefectures, and related information.',
          },
          {
            fr: 'Déployer publiquement l’API avec une documentation accessible pour accélérer l’adoption.',
            en: 'Deployed the API publicly with accessible documentation to speed up adoption.',
          },
        ],
      },
      {
        title: { fr: 'Livrables', en: 'Deliverables' },
        items: [
          {
            fr: 'API REST publique avec endpoints consultables.',
            en: 'Public REST API with browsable endpoints.',
          },
          {
            fr: 'Documentation et exemples d’utilisation pour les développeurs.',
            en: 'Documentation and usage examples for developers.',
          },
        ],
      },
    ],
    proofBlocks: [
      {
        title: { fr: 'Endpoints exposés', en: 'Exposed endpoints' },
        variant: 'code',
        lines: [
          { fr: 'GET /api/regions', en: 'GET /api/regions' },
          { fr: 'GET /api/prefectures', en: 'GET /api/prefectures' },
          { fr: 'GET /api/regions/:id', en: 'GET /api/regions/:id' },
        ],
      },
      {
        title: { fr: 'Exemple de réponse JSON', en: 'Sample JSON response' },
        variant: 'code',
        lines: [
          { fr: '{', en: '{' },
          { fr: '  "id": "conakry",', en: '  "id": "conakry",' },
          { fr: '  "name": "Conakry",', en: '  "name": "Conakry",' },
          { fr: '  "type": "region",', en: '  "type": "region",' },
          { fr: '  "prefectures": ["Conakry"]', en: '  "prefectures": ["Conakry"]' },
          { fr: '}', en: '}' },
        ],
      },
      {
        title: { fr: 'Parcours d’intégration', en: 'Integration path' },
        variant: 'flow',
        lines: [
          { fr: 'Requête HTTP', en: 'HTTP request' },
          { fr: 'Données géographiques', en: 'Geographic data' },
          { fr: 'Application locale', en: 'Local app' },
        ],
      },
    ],
    images: [
      'assets/img/projects/api-guinea-geo.png',
      'assets/img/projects/api-guinea-geo/docs-api.jpg',
      'assets/img/projects/api-guinea-geo/test-api.jpg',
    ],
    tags: ['API', 'Geodata', 'Open Data'],
    stack: ['REST API', 'Node.js', 'Geodata', 'Vercel'],
    featured: true,
  },
];
