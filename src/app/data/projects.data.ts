import { LocalizedText } from '../models/localized-text.model';
import { PortfolioFilter, Project } from '../models/project.model';

export type ProjectCategory = PortfolioFilter;
export type { Project } from '../models/project.model';

export function findProjectBySlug(slug: string | null): Project | undefined {
  if (!slug) return undefined;
  return PROJECTS.find((project) => project.slug === slug || project.legacySlugs.includes(slug));
}

export const PROJECTS: Project[] = [
  {
    id: 'gui-plus',
    slug: 'gui-plus',
    legacySlugs: [],
    previousNames: [],
    title: {
      fr: 'Gui-Plus',
      en: 'Gui-Plus',
    },
    coverImage: 'assets/img/projects/guiplus224.jpg',
    date: '19/04/2019',
    context: 'personal',
    projectType: 'media-platform',
    portfolioFilter: 'web',
    category: { fr: 'Plateforme média numérique', en: 'Digital media platform' },
    domains: [{ fr: 'Médias numériques', en: 'Digital media' }],
    currentTechnologies: ['Wordpress', 'PHP', 'JS'],
    plannedTechnologies: [],
    capabilities: [{ fr: 'Publication de contenu', en: 'Content publishing' }],
    featured: false,
    client: 'Gui-Plus Group',
    //demo: 'https://guiplusgroup.com',
    description: {
      fr: `Plateforme web de présentation et de publication pour Gui-Plus Group, pensée pour rendre les activités, services et contenus de l'organisation accessibles en ligne.`,
      en: `Presentation and publishing website for Gui-Plus Group, designed to make the organization's activities, services, and content accessible online.`,
    },
    cardSummary: {
      fr: 'Plateforme web de présentation et de publication des activités et contenus de Gui-Plus Group.',
      en: 'Web platform for presenting and publishing Gui-Plus Group activities and content.',
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
    gallery: [
      'assets/img/projects/guiplus/guiplus1.png',
      'assets/img/projects/guiplus/guiplus2.png',
      'assets/img/projects/guiplus/guiplus3.png',
    ],
  },
  {
    id: 'citoykaidi',
    slug: 'citoykaidi',
    legacySlugs: ['gestion-demo'],
    previousNames: [
      { fr: 'Gestion Démographie', en: 'Demographic Management' },
      { fr: 'Gestion Demo', en: 'Gestion Demo' },
    ],
    title: {
      fr: 'CitoyKaidi',
      en: 'CitoyKaidi',
    },
    coverImage: 'assets/img/projects/citoykaidi/home.png',
    date: '18 Sep. 2018',
    context: 'product',
    projectType: 'civic-tech-platform',
    portfolioFilter: 'web',
    category: { fr: 'Plateforme de technologie civique', en: 'Civic technology platform' },
    domains: [{ fr: 'Technologie civique', en: 'Civic technology' }],
    currentTechnologies: ['php'],
    plannedTechnologies: ['java', 'spring-boot', 'postgresql', 'flyway', 'jwt', 'swagger', 'docker'],
    capabilities: [],
    status: 'planned-modernization',
    featured: false,
    repository: 'https://github.com/souleymanetimbidiallo/gestion-demo',
    description: {
      fr: 'Projet de technologie civique conçu pour simplifier l’accès aux démarches administratives et aux services citoyens.',
      en: 'A civic technology project designed to simplify access to administrative and citizen services.',
    },
    cardSummary: {
      fr: 'Projet de technologie civique pour l’accès aux démarches administratives et aux services citoyens.',
      en: 'Civic technology project for access to administrative and citizen services.',
    },
    role: {
      fr: 'Conception produit et développement full-stack',
      en: 'Product design and full-stack development',
    },
    highlights: [],
    editorialCaseStudy: {
      overview: {
        fr: 'CitoyKaidi poursuit le projet auparavant présenté sous les noms Gestion Démographie et Gestion Demo.',
        en: 'CitoyKaidi continues the project previously presented as Gestion Démographie and Gestion Demo.',
      },
      nextSteps: {
        fr: 'Une modernisation technique est prévue, séparément de l’implémentation PHP actuelle.',
        en: 'A technical modernization is planned separately from the current PHP implementation.',
      },
    },
    gallery: [
      'assets/img/projects/citoykaidi/connexion.png',
      'assets/img/projects/citoykaidi/documents.png',
      'assets/img/projects/citoykaidi/procedures.png',
      'assets/img/projects/citoykaidi/admin-list.png',
      'assets/img/projects/citoykaidi/admin-connexion.png'
    ],
  },
  {
    id: 'soodou-shop',
    slug: 'soodou-shop',
    legacySlugs: [],
    previousNames: [],
    title: {
      fr: 'Soodou Shop',
      en: 'Soodou Shop',
    },
    coverImage: 'assets/img/projects/soodou-shop.png',
    date: '05/05/2020',
    context: 'personal',
    projectType: 'e-commerce',
    portfolioFilter: 'web',
    category: { fr: 'Application e-commerce', en: 'E-commerce application' },
    domains: [{ fr: 'E-commerce', en: 'E-commerce' }, { fr: 'Web', en: 'Web' }],
    currentTechnologies: ['php'],
    plannedTechnologies: [],
    capabilities: [
      { fr: 'Catalogue produit', en: 'Product catalog' },
      { fr: 'Parcours d’achat', en: 'Shopping flow' },
    ],
    featured: false,
    client: 'Soodou Shop',
    repository: 'https://github.com/souleymanetimbidiallo/soodou-shop',
    description: {
      fr: `Application e-commerce dédiée aux produits high-tech, couvrant le catalogue, la navigation produit et le parcours d’achat.`,
      en: `E-commerce application for high-tech products, covering catalog browsing, product navigation, and the shopping flow.`,
    },
    cardSummary: {
      fr: 'Application e-commerce PHP pour parcourir un catalogue de produits high-tech et suivre un parcours d’achat.',
      en: 'PHP e-commerce application for browsing a high-tech product catalog and following a shopping flow.',
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
    editorialCaseStudy: {
      overview: {
        fr: 'Application e-commerce développée en PHP autour d’un catalogue de produits et d’un parcours d’achat.',
        en: 'PHP e-commerce application built around a product catalog and shopping flow.',
      },
    },
    gallery: ['assets/img/projects/soodou-shop.png'],
  },
  {
    id: 'ag35-website',
    slug: 'ag35-website',
    legacySlugs: [],
    previousNames: [],
    title: {
      fr: "Association Guinéenne d'Ille-et-Vilaine (AG35)",
      en: "Guinean Association of Ille-et-Vilaine (AG35)",
    },
    coverImage: 'assets/img/projects/ag35.png',
    date: '19/04/2023',
    context: 'personal',
    projectType: 'corporate-website',
    portfolioFilter: 'web',
    category: { fr: 'Site associatif', en: 'Association website' },
    domains: [{ fr: 'Vie associative', en: 'Community organization' }],
    currentTechnologies: ['symfony', 'php', 'twig', 'js'],
    plannedTechnologies: [],
    capabilities: [{ fr: 'Publication de contenu associatif', en: 'Community content publishing' }],
    featured: false,
    client: 'AG35',
    repository: 'https://github.com/souleymanetimbidiallo/ag35_website',
    description: {
      fr: `Site associatif pour présenter les actions, actualités et ressources de l’AG35 auprès de sa communauté.`,
      en: `Association website presenting AG35 actions, news, and resources to its community.`,
    },
    cardSummary: {
      fr: 'Site associatif présentant les actions, actualités et ressources de l’AG35.',
      en: 'Association website presenting AG35 activities, news, and resources.',
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
    gallery: [
      'assets/img/projects/ag35.png',
      'assets/img/projects/ag35/ag35_2.png',
    ],
  },
  {
    id: 'guinea-roads',
    slug: 'guinea-roads',
    legacySlugs: [],
    previousNames: [],
    title: {
      fr: 'Guinea-Roads',
      en: 'Guinea-Roads',
    },
    coverImage: 'assets/img/projects/guinea-roads.png',
    repository: 'https://github.com/souleymanetimbidiallo/guinea_roads',
    date: '08/04/2024',
    context: 'personal',
    projectType: 'mobile-application',
    portfolioFilter: 'mobile',
    category: { fr: 'Application mobile de transport', en: 'Mobile transport application' },
    domains: [{ fr: 'Transport', en: 'Transport' }],
    currentTechnologies: [],
    plannedTechnologies: [],
    capabilities: [
      { fr: 'Cartographie', en: 'Maps' },
      { fr: 'Géolocalisation', en: 'Geolocation' },
      { fr: 'Recherche d’itinéraires', en: 'Route discovery' },
    ],
    client: 'Guinea-Roads',
    description: {
      fr: `Application mobile de transport urbain pour rechercher des itinéraires, explorer les points d’intérêt proches et améliorer l’orientation des usagers.`,
      en: `Urban transport mobile app for route search, nearby point-of-interest discovery, and better user navigation.`,
    },
    cardSummary: {
      fr: 'Application mobile de transport urbain pour les itinéraires et points d’intérêt proches.',
      en: 'Urban transport mobile app for routes and nearby points of interest.',
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
    gallery: [
      'assets/img/projects/guinea-roads/guinea-roads.png',
      'assets/img/projects/guinea-roads/demo2.png',
    ],
    featured: true,
  },
  {
    id: 'examens-gn',
    slug: 'examens-gn',
    legacySlugs: [],
    previousNames: [],
    title: {
      fr: 'Examens nationaux GN 2023',
      en: 'Guinea National Exams 2023',
    },
    coverImage: 'assets/img/projects/examens_gn.jpeg',
    date: '18 Sep. 2023',
    context: 'personal',
    projectType: 'data-analytics',
    portfolioFilter: 'data',
    category: { fr: 'Analyse de données', en: 'Data analysis' },
    domains: [{ fr: 'Éducation', en: 'Education' }],
    currentTechnologies: ['python', 'pandas'],
    plannedTechnologies: [],
    capabilities: [
      { fr: 'Nettoyage de données', en: 'Data cleaning' },
      { fr: 'Visualisation de données', en: 'Data visualization' },
    ],
    client: 'Gui-Plus Group',
    repository: 'https://github.com/souleymanetimbidiallo/examens-gn-2023',
    description: {
      fr: `Analyse des résultats des examens nationaux guinéens 2023 avec Python, nettoyage de données et visualisations pour rendre les tendances plus lisibles.`,
      en: `Analysis of Guinea’s 2023 national exam results using Python, data cleaning, and visualizations to make trends easier to read.`,
    },
    cardSummary: {
      fr: 'Analyse Python des résultats des examens nationaux guinéens 2023 avec nettoyage et visualisation des données.',
      en: 'Python analysis of Guinea’s 2023 national exam results with data cleaning and visualization.',
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
    gallery: [
      'assets/img/projects/examens-gn-2023/Capture.PNG',
      'assets/img/projects/examens-gn-2023/demo2.PNG',
    ],
    featured: true,
  },
  {
    "id": "api-guinea-geo",
    "slug": "api-guinea-geo",
    "legacySlugs": [],
    "previousNames": [],
    "title": {
      "fr": "Guinea Geo API",
      "en": "Guinea Geo API"
    },
    "coverImage": "assets/img/projects/api-guinea-geo-cover-premium-v2.png",
    "date": "10 Avr. 2024",
    "context": "personal",
    "projectType": "developer-api",
    "portfolioFilter": "data",
    "category": {
      "fr": "API et explorateur de données géographiques",
      "en": "Geographic data API and explorer"
    },
    "domains": [
      {
        "fr": "Données géographiques ouvertes",
        "en": "Open geodata"
      }
    ],
    "currentTechnologies": [
      "javascript",
      "node-js",
      "swagger",
      "vercel"
    ],
    "plannedTechnologies": [],
    "capabilities": [
      {
        "fr": "Exploration des subdivisions et recherche par nom",
        "en": "Subdivision explorer and name search"
      },
      {
        "fr": "Copie et téléchargement des données JSON",
        "en": "Copy and download JSON data"
      },
      {
        "fr": "Documentation et requêtes interactives",
        "en": "Documentation and interactive requests"
      }
    ],
    "demo": "https://api-guinea-geo.vercel.app/",
    "repository": "https://github.com/souleymanetimbidiallo/api-guinea-geo",
    "description": {
      "fr": "Une API REST et un site pour explorer les subdivisions de la Guinée, rechercher un lieu et récupérer ses données en JSON.",
      "en": "A REST API and website to explore Guinea’s subdivisions, search for a place and retrieve its data as JSON."
    },
    "cardSummary": {
      "fr": "Explorer les régions et leurs subdivisions, rechercher un lieu et essayer les requêtes avant de les intégrer à une application.",
      "en": "Explore regions and their subdivisions, search for places and try requests before integrating them into an application."
    },
    "role": {
      "fr": "Conception de l’API et développement du site d’exploration",
      "en": "API design and explorer website development"
    },
    "highlights": [],
    "featured": true,
    "editorialCaseStudy": {
      "overview": {
        "fr": "Je développe Guinea Geo API pour proposer un point d’accès commun aux données territoriales guinéennes. Le site permet de parcourir les données sans écrire de code ; l’API permet de les intégrer dans une application.",
        "en": "I develop Guinea Geo API as a shared entry point to Guinean territorial data. The website lets visitors browse without writing code; the API makes the data available to applications."
      },
      "solution": {
        "fr": "L’explorateur propose cinq niveaux : régions, préfectures, sous-préfectures, communes et quartiers. Il combine recherche par nom, consultation des subdivisions, copie et téléchargement JSON. Un espace permet aussi d’exécuter des exemples de requêtes.",
        "en": "The explorer offers five levels: regions, prefectures, sub-prefectures, communes and neighborhoods. It combines name search, subdivision browsing, and JSON copying and downloads. A separate area lets visitors run sample requests."
      },
      "architecture": {
        "fr": "API Node.js avec Express et documentation Swagger, déployée sur Vercel. Le site utilise JavaScript et Leaflet pour les repères cartographiques des chefs-lieux.",
        "en": "Node.js API with Express and Swagger documentation, deployed on Vercel. The website uses JavaScript and Leaflet for map markers showing regional capitals."
      },
      "nextSteps": {
        "fr": "La couverture des communes et quartiers reste partielle. Les populations RGPH-4 correspondent au recensement de 2025, avant la réforme territoriale de 2026. Les superficies et certains rattachements restent à vérifier ; le site signale ces limites.",
        "en": "Commune and neighborhood coverage remains partial. RGPH-4 populations refer to the 2025 census, before the 2026 territorial reform. Areas and some administrative relationships still need verification; the website identifies these limitations."
      }
    },
    "caseStudy": [
      {
        "title": {
          "fr": "Deux façons d’utiliser le projet",
          "en": "Two ways to use the project"
        },
        "items": [
          {
            "fr": "Explorer le territoire depuis le navigateur, puis copier ou télécharger les données utiles.",
            "en": "Explore the territory in the browser, then copy or download the data you need."
          },
          {
            "fr": "Utiliser directement les endpoints REST et consulter les paramètres dans la documentation Swagger.",
            "en": "Use the REST endpoints directly and find their parameters in the Swagger documentation."
          }
        ]
      }
    ],
    "proofBlocks": [
      {
        "title": {
          "fr": "Requêtes proposées sur le site",
          "en": "Requests available on the website"
        },
        "variant": "code",
        "lines": [
          {
            "fr": "GET /regions",
            "en": "GET /regions"
          },
          {
            "fr": "GET /prefectures",
            "en": "GET /prefectures"
          },
          {
            "fr": "GET /sous-prefectures",
            "en": "GET /sous-prefectures"
          },
          {
            "fr": "GET /regions/search?name=Kankan",
            "en": "GET /regions/search?name=Kankan"
          },
          {
            "fr": "GET /regions/stats",
            "en": "GET /regions/stats"
          }
        ]
      },
      {
        "title": {
          "fr": "Réponse réelle : Kankan (extrait)",
          "en": "Actual response: Kankan (excerpt)"
        },
        "variant": "code",
        "lines": [
          {
            "fr": "{",
            "en": "{"
          },
          {
            "fr": "  \"name\": \"Kankan\",",
            "en": "  \"name\": \"Kankan\","
          },
          {
            "fr": "  \"zone\": \"Est\",",
            "en": "  \"zone\": \"Est\","
          },
          {
            "fr": "  \"administrativeStatus\": \"active\",",
            "en": "  \"administrativeStatus\": \"active\","
          },
          {
            "fr": "  \"metricsStatus\": \"legacy-unverified\",",
            "en": "  \"metricsStatus\": \"legacy-unverified\","
          },
          {
            "fr": "  \"populationReferenceYear\": 2025,",
            "en": "  \"populationReferenceYear\": 2025,"
          },
          {
            "fr": "  \"populationStatus\": \"preliminary\"",
            "en": "  \"populationStatus\": \"preliminary\""
          },
          {
            "fr": "}",
            "en": "}"
          }
        ]
      }
    ],
    "gallery": [
      "assets/img/projects/api-guinea-geo/conakry-detail.png",
      "assets/img/projects/api-guinea-geo/kankan-api-response.png"
    ],
    "galleryCaptions": {
      "assets/img/projects/api-guinea-geo/conakry-detail.png": {
        "fr": "Fiche de Conakry dans l’explorateur : données de population référencées, sources, limites de validité et accès aux communes. Les données peuvent être copiées ou téléchargées en JSON.",
        "en": "Conakry in the explorer: referenced population data, sources, validity limitations and access to communes. Data can be copied or downloaded as JSON."
      },
      "assets/img/projects/api-guinea-geo/kankan-api-response.png": {
        "fr": "Requête GET /regions/search?name=Kankan exécutée depuis le site : réponse HTTP 200 et données JSON consultables directement dans l’interface.",
        "en": "GET /regions/search?name=Kankan executed from the website: an HTTP 200 response and JSON data viewable directly in the interface."
      }
    }
  },
  {
    id: 'kaglob-erp',
    slug: 'kaglob-erp',
    legacySlugs: [],
    previousNames: [],
    title: { fr: 'KAGLOB ERP', en: 'KAGLOB ERP' },
    coverImage: 'assets/img/projects/kaglob/kaglob-logo.png',
    description: {
      fr: 'Application métier modulaire pour la gestion de flotte et les opérations de location de véhicules.',
      en: 'Modular business application for fleet management and vehicle-rental operations.',
    },
    cardSummary: {
      fr: 'ERP modulaire de gestion de flotte et de location de véhicules.',
      en: 'Modular fleet management and vehicle rental ERP.',
    },
    detailSummary: {
      fr: 'KAGLOB ERP structure les opérations commerciales, la flotte, les flux financiers, l’administration et la génération de documents liés à la location de véhicules.',
      en: 'KAGLOB ERP structures commercial operations, fleet workflows, financial operations, administration, and document generation for vehicle rentals.',
    },
    role: {
      fr: 'Conception produit, architecture applicative et développement full-stack',
      en: 'Product design, application architecture and full-stack development',
    },
    context: 'product',
    projectType: 'erp-platform',
    portfolioFilter: 'web',
    category: { fr: 'Application métier / ERP', en: 'Business application / ERP' },
    domains: [
      { fr: 'Gestion de flotte', en: 'Fleet management' },
      { fr: 'Location de véhicules', en: 'Vehicle rental' },
    ],
    currentTechnologies: [
      'php-8-2', 'laravel', 'livewire', 'livewire-volt', 'blade', 'tailwind-css',
      'vite', 'sqlite', 'dompdf',
    ],
    plannedTechnologies: [],
    capabilities: [
      { fr: 'Contrôle d’accès basé sur les rôles', en: 'Role-based access control' },
      { fr: 'Demandes publiques de réservation', en: 'Public reservation requests' },
      { fr: 'Flux de travail back-office', en: 'Back-office workflows' },
      { fr: 'Gestion des utilisateurs', en: 'User management' },
      { fr: 'Gestion des clients', en: 'Customer management' },
      { fr: 'Gestion des véhicules', en: 'Vehicle management' },
      { fr: 'Gestion des réservations', en: 'Reservation management' },
      { fr: 'Gestion des chauffeurs', en: 'Driver management' },
      { fr: 'Gestion des missions', en: 'Mission management' },
      { fr: 'Gestion du garage', en: 'Garage management' },
      { fr: 'Gestion du carburant', en: 'Fuel management' },
      { fr: 'Gestion GPS', en: 'GPS management' },
      { fr: 'Gestion des paiements', en: 'Payment management' },
      { fr: 'Gestion des factures', en: 'Invoice management' },
      { fr: 'Gestion des dépenses', en: 'Expense management' },
      { fr: 'Flux comptables', en: 'Accounting workflows' },
      { fr: 'Gestion des assurances', en: 'Insurance management' },
      { fr: 'Gestion des litiges', en: 'Dispute management' },
      { fr: 'Gestion de la publicité mobile', en: 'Mobile advertising management' },
      { fr: 'Gestion des collaborateurs', en: 'Collaborator management' },
      { fr: 'Génération de contrats PDF', en: 'Contract PDF generation' },
    ],
    capabilityGroups: [
      {
        title: { fr: 'Opérations commerciales', en: 'Commercial operations' },
        items: [
          { fr: 'Demandes publiques de réservation', en: 'Public reservation requests' },
          { fr: 'Gestion des clients', en: 'Customer management' },
          { fr: 'Gestion des réservations', en: 'Reservation management' },
          { fr: 'Flux de travail back-office', en: 'Back-office workflows' },
        ],
      },
      {
        title: { fr: 'Opérations de flotte', en: 'Fleet operations' },
        items: [
          { fr: 'Gestion des véhicules', en: 'Vehicle management' },
          { fr: 'Gestion des chauffeurs', en: 'Driver management' },
          { fr: 'Gestion des missions', en: 'Mission management' },
          { fr: 'Gestion du garage', en: 'Garage management' },
          { fr: 'Gestion du carburant', en: 'Fuel management' },
          { fr: 'Gestion GPS', en: 'GPS management' },
        ],
      },
      {
        title: { fr: 'Opérations financières', en: 'Financial operations' },
        items: [
          { fr: 'Gestion des paiements', en: 'Payment management' },
          { fr: 'Gestion des factures', en: 'Invoice management' },
          { fr: 'Gestion des dépenses', en: 'Expense management' },
          { fr: 'Flux comptables', en: 'Accounting workflows' },
        ],
      },
      {
        title: { fr: 'Administration et risques', en: 'Administration and risk' },
        items: [
          { fr: 'Gestion des utilisateurs', en: 'User management' },
          { fr: 'Contrôle d’accès basé sur les rôles', en: 'Role-based access control' },
          { fr: 'Gestion des assurances', en: 'Insurance management' },
          { fr: 'Gestion des litiges', en: 'Dispute management' },
          { fr: 'Gestion des collaborateurs', en: 'Collaborator management' },
          { fr: 'Gestion de la publicité mobile', en: 'Mobile advertising management' },
        ],
      },
      {
        title: { fr: 'Documents', en: 'Documents' },
        items: [{ fr: 'Génération de contrats PDF', en: 'Contract PDF generation' }],
      },
    ],
    editorialCaseStudy: {
      overview: {
        fr: 'Je développe KAGLOB ERP autour des opérations de location de véhicules : suivre la flotte, gérer les contrats et regrouper les informations financières.',
        en: 'I’m building KAGLOB ERP around vehicle rental operations: tracking the fleet, managing contracts and bringing financial information together.',
      },
      solution: {
        fr: 'L’application regroupe les opérations commerciales, de flotte, financières et administratives dans des modules fonctionnels.',
        en: 'The application organizes commercial, fleet, financial, and administrative operations into functional modules.',
      },
      architecture: {
        fr: 'Application PHP 8.2 basée sur Laravel 12, Livewire 4, Livewire Volt, Blade, Tailwind CSS, Vite et SQLite, avec DomPDF pour les contrats.',
        en: 'PHP 8.2 application using Laravel 12, Livewire 4, Livewire Volt, Blade, Tailwind CSS, Vite, and SQLite, with DomPDF for contracts.',
      },
    },
    status: 'active-development',
    featured: false,
    gallery: [
      'assets/img/projects/kaglob/kaglob1.png',
      'assets/img/projects/kaglob/kaglob2.png',
    ],
    highlights: [],
  },
  {
    id: 'yiidein',
    slug: 'yiidein',
    legacySlugs: [],
    previousNames: [],
    title: { fr: 'Yiidein', en: 'Yiidein' },
    coverImage: 'assets/img/projects/yiidein/cover.png',
    description: {
      fr: 'Plateforme SaaS réutilisable de prise de rendez-vous conçue pour plusieurs secteurs.',
      en: 'Reusable appointment-booking SaaS platform designed for multiple sectors.',
    },
    cardSummary: {
      fr: 'Trouver un service et réserver un créneau, avec des espaces dédiés aux clients et aux prestataires.',
      en: 'Find a service and book a time slot, with separate spaces for clients and providers.',
    },
    detailSummary: {
      fr: 'Yiidein structure la découverte publique des organisations et services, la sélection de créneaux et des espaces distincts pour les clients, prestataires et administrateurs.',
      en: 'Yiidein structures public organization and service discovery, appointment-slot selection, and separate client, provider, and administration areas.',
    },
    role: {
      fr: 'Conception produit, architecture logicielle et développement full-stack',
      en: 'Product design, software architecture and full-stack development',
    },
    context: 'product',
    projectType: 'saas-platform',
    portfolioFilter: 'web',
    category: { fr: 'SaaS multi-domaine de prise de rendez-vous', en: 'Multi-domain appointment-booking SaaS' },
    domains: [
      { fr: 'Prise de rendez-vous', en: 'Appointment booking' },
      { fr: 'Santé', en: 'Healthcare' },
      { fr: 'Administration publique', en: 'Public administration' },
      { fr: 'Éducation', en: 'Education' },
      { fr: 'Services privés', en: 'Private services' },
    ],
    currentTechnologies: [
      'java-21', 'spring-boot', 'postgresql', 'flyway', 'react', 'vite',
      'tailwind-css', 'jwt', 'docker',
    ],
    plannedTechnologies: [],
    capabilities: [
      { fr: 'Découverte publique des organisations', en: 'Public organization discovery' },
      { fr: 'Détails des organisations', en: 'Organization details' },
      { fr: 'Détails des services', en: 'Service details' },
      { fr: 'Sélection de créneaux de rendez-vous', en: 'Appointment-slot selection' },
      { fr: 'Espace client', en: 'Client area' },
      { fr: 'Espace prestataire', en: 'Provider area' },
      { fr: 'Espace d’administration', en: 'Administration area' },
      { fr: 'Contrôle d’accès basé sur les rôles', en: 'Role-based access control' },
    ],
    capabilityGroups: [
      {
        title: { fr: 'Découverte publique', en: 'Public discovery' },
        items: [
          { fr: 'Recherche d’organisations', en: 'Organization search' },
          { fr: 'Détails des organisations', en: 'Organization details' },
          { fr: 'Détails des services', en: 'Service details' },
          { fr: 'Sélection de créneaux de rendez-vous', en: 'Appointment-slot selection' },
        ],
      },
      {
        title: { fr: 'Espaces utilisateurs', en: 'User spaces' },
        items: [
          { fr: 'Espace client', en: 'Client area' },
          { fr: 'Espace prestataire', en: 'Provider area' },
          { fr: 'Espace d’administration', en: 'Administration area' },
        ],
      },
      {
        title: { fr: 'Fonctionnalités de plateforme', en: 'Platform capabilities' },
        items: [
          { fr: 'Authentification', en: 'Authentication' },
          { fr: 'Contrôle d’accès basé sur les rôles', en: 'Role-based access control' },
          { fr: 'Flux de prise de rendez-vous', en: 'Appointment workflows' },
        ],
      },
    ],
    editorialCaseStudy: {
      overview: {
        fr: 'Je développe Yiidein pour réunir la recherche de services et la réservation de rendez-vous dans une même application, utilisable dans plusieurs secteurs.',
        en: 'I’m building Yiidein to bring service search and appointment booking into one application that can serve several sectors.',
      },
      solution: {
        fr: 'Le produit sépare le parcours public des espaces client, prestataire et administration.',
        en: 'The product separates the public journey from client, provider, and administration areas.',
      },
      architecture: {
        fr: 'Backend Java 21 et Spring Boot avec PostgreSQL et Flyway; frontend React avec Vite et Tailwind CSS; authentification JWT et conteneurisation Docker.',
        en: 'Java 21 and Spring Boot backend with PostgreSQL and Flyway; React frontend with Vite and Tailwind CSS; JWT authentication and Docker containerization.',
      },
    },
    status: 'active-development',
    featured: false,
    
    gallery: [
      'assets/img/projects/yiidein/dashboard-admin.png',
      'assets/img/projects/yiidein/dashboard-client.png',
      'assets/img/projects/yiidein/homepage.png',
    ],
    highlights: [],
  },
  {
    id: 'gn-exams-2026',
    slug: 'gn-exams-2026',
    legacySlugs: [],
    previousNames: [],
    title: { fr: 'GN Exams 2026', en: 'GN Exams 2026' },
    coverImage: 'assets/img/projects/gn-exams-2026/cover.png',
    description: {
      fr: 'Application de traitement, d’analyse et de visualisation des résultats des examens nationaux de Guinée en 2026.',
      en: "Application for processing, analyzing, and visualizing Guinea's 2026 national examination results.",
    },
    cardSummary: {
      fr: 'Explorer les résultats des examens guinéens par établissement et région, consulter les classements et partager des cartes.',
      en: 'Explore Guinean examination results by school and region, view rankings and share result cards.',
    },
    detailSummary: {
      fr: 'GN Exams 2026 exploite des données de résultats d’examens pour produire des classements, des analyses par établissement, élève, région, genre et statut public ou privé.',
      en: 'GN Exams 2026 uses examination-result data to produce rankings and analysis by school, student, region, gender, and public or private status.',
    },
    role: { fr: 'Développement de l’application, traitement et visualisation des données', en: 'Application development, data processing and visualization' },
    context: 'personal',
    projectType: 'data-analytics',
    portfolioFilter: 'data',
    category: { fr: 'Application d’analyse de données', en: 'Data analysis application' },
    domains: [
      { fr: 'Éducation', en: 'Education' },
      { fr: 'Données ouvertes', en: 'Open data' },
    ],
    currentTechnologies: ['python', 'streamlit', 'duckdb', 'pandas', 'plotly', 'parquet'],
    demos: [
      {
        label: { fr: 'CEE 2026', en: 'CEE 2026' },
        url: 'https://gn-cee-2026.streamlit.app/',
      },
      {
        label: { fr: 'BEPC 2026', en: 'BEPC 2026' },
        url: 'https://gn-bepc-2026.streamlit.app/',
      },
      {
        label: { fr: 'BAC 2026', en: 'BAC 2026' },
        url: 'https://gn-bac-2026.streamlit.app/',
      },
    ],
    plannedTechnologies: [],
    capabilities: [
      { fr: 'Analyse des résultats d’examens', en: 'Examination-result analysis' },
      { fr: 'Classements', en: 'Rankings' },
      { fr: 'Vues établissements et élèves', en: 'School and student views' },
      { fr: 'Analyse régionale', en: 'Regional analysis' },
      { fr: 'Analyse par genre', en: 'Gender analysis' },
      { fr: 'Analyse public/privé', en: 'Public/private analysis' },
      { fr: 'Carte interactive de la Guinée', en: 'Interactive Guinea map' },
      { fr: 'Cartes partageables des établissements et élèves', en: 'Shareable school and student cards' },
    ],
    capabilityGroups: [
      {
        title: { fr: 'Traitement des données', en: 'Data processing' },
        items: [
          { fr: 'Traitement des résultats d’examens', en: 'Examination-result processing' },
          { fr: 'Requêtes analytiques avec DuckDB', en: 'DuckDB-based analytical queries' },
          { fr: 'Stockage de données au format Parquet', en: 'Parquet-based data storage' },
        ],
      },
      {
        title: { fr: 'Analyses', en: 'Analytics' },
        items: [
          { fr: 'Classements', en: 'Rankings' },
          { fr: 'Analyse par établissement', en: 'School analysis' },
          { fr: 'Analyse par élève', en: 'Student analysis' },
          { fr: 'Analyse régionale', en: 'Regional analysis' },
          { fr: 'Analyse par genre', en: 'Gender analysis' },
          { fr: 'Analyse public/privé', en: 'Public/private analysis' },
        ],
      },
      {
        title: { fr: 'Visualisation et partage', en: 'Visualization and sharing' },
        items: [
          { fr: 'Carte interactive de la Guinée', en: 'Interactive Guinea map' },
          { fr: 'Cartes partageables des établissements', en: 'Shareable school cards' },
          { fr: 'Cartes partageables des élèves', en: 'Shareable student cards' },
          { fr: 'Visualisations Plotly', en: 'Plotly visualizations' },
        ],
      },
    ],
    editorialCaseStudy: {
      overview: {
        fr: 'Avec GN Exams 2026, je présente les résultats des examens nationaux guinéens sous forme de classements, de cartes et de vues par établissement.',
        en: "With GN Exams 2026, I present Guinea’s national examination results through rankings, maps and school-level views.",
      },
      problem: {
        fr: 'Au-delà d’un résultat individuel, le projet permet d’examiner les résultats à plusieurs échelles : un établissement, une région ou l’ensemble d’un examen. Ces vues servent aussi à comparer les résultats selon le genre et le statut public ou privé.',
        en: 'Beyond an individual result, the project offers several levels of analysis: a school, a region or an entire examination. These views also support comparisons by gender and public or private school status.',
      },
      solution: {
        fr: 'J’ai organisé l’application autour des classements, des vues par établissement et élève, et d’une carte interactive de la Guinée. Des cartes partageables permettent de présenter les résultats en dehors de l’application.',
        en: 'I organized the application around rankings, school and student views, and an interactive map of Guinea. Shareable cards let people present results outside the application.',
      },
      architecture: {
        fr: 'Application Python et Streamlit utilisant DuckDB pour les requêtes analytiques, Pandas pour le traitement, Parquet pour le stockage et Plotly pour les visualisations.',
        en: 'Python and Streamlit application using DuckDB for analytical queries, Pandas for processing, Parquet for storage, and Plotly for visualizations.',
      },
    },
    caseStudy: [
      {
        title: { fr: 'Du fichier de données à la visualisation', en: 'From data files to visualizations' },
        items: [
          { fr: 'Pandas pour le traitement des données et Parquet pour leur stockage.', en: 'Pandas handles data processing, with Parquet for storage.' },
          { fr: 'DuckDB pour les requêtes analytiques utilisées dans les classements et les comparaisons.', en: 'DuckDB handles the analytical queries used in rankings and comparisons.' },
          { fr: 'Streamlit pour l’interface et Plotly pour les graphiques interactifs.', en: 'Streamlit provides the interface and Plotly the interactive charts.' },
        ],
      },
    ],
    galleryCaptions: {
      'assets/img/projects/gn-exams-2026/cee-2026.png': { fr: 'CEE 2026 — aperçu de l’application consacrée aux résultats du certificat d’études élémentaires.', en: 'CEE 2026 — a look at the application for primary school certificate results.' },
      'assets/img/projects/gn-exams-2026/bepc-2026.png': { fr: 'BEPC 2026 — aperçu de l’application consacrée aux résultats du brevet d’études du premier cycle.', en: 'BEPC 2026 — a look at the application for lower secondary examination results.' },
      'assets/img/projects/gn-exams-2026/bac-2026.png': { fr: 'BAC 2026 — aperçu de l’application consacrée aux résultats du baccalauréat.', en: 'BAC 2026 — a look at the application for baccalaureate results.' },
    },
    status: 'completed',
    featured: false,
    gallery: [
      'assets/img/projects/gn-exams-2026/cee-2026.png',
      'assets/img/projects/gn-exams-2026/bepc-2026.png',
      'assets/img/projects/gn-exams-2026/bac-2026.png',
    ],
    highlights: [],
  },
];
