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
    date: '2019-04-19',
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
      'assets/img/projects/guiplus/guiplus1.webp',
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
    coverImage: 'assets/img/projects/citoykaidi/home.webp',
    date: '2018-09-18',
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
      'assets/img/projects/citoykaidi/connexion.webp',
      'assets/img/projects/citoykaidi/documents.webp',
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
    date: '2020-05-05',
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
    coverImage: 'assets/img/projects/ag35/accueil.webp',
    date: '2023-04-19',
    context: 'personal',
    projectType: 'corporate-website',
    portfolioFilter: 'web',
    status: 'deployment-preparation',
    category: { fr: 'Site associatif', en: 'Association website' },
    domains: [{ fr: 'Vie associative', en: 'Community organization' }],
    currentTechnologies: ['symfony', 'php', 'twig', 'bootstrap', 'js'],
    plannedTechnologies: [],
    capabilities: [
      { fr: 'Publication de contenu associatif', en: 'Community content publishing' },
      { fr: 'Back-office d’administration', en: 'Administration back office' },
      { fr: 'Synchronisation des adhésions HelloAsso', en: 'HelloAsso membership sync' },
      { fr: 'Accueil des nouveaux arrivants', en: 'Newcomer onboarding' },
    ],
    featured: false,
    client: 'AG35',
    repository: 'https://github.com/souleymanetimbidiallo/ag35_website',
    description: {
      fr: `Site de l’AG35 pour présenter ses actions, son agenda et ses actualités, accompagner les étudiant·es qui arrivent à Rennes et gérer adhésions, dons et bénévolat depuis un espace d’administration.`,
      en: `AG35 website presenting its activities, events and news, helping students who arrive in Rennes, and managing memberships, donations and volunteering from an administration area.`,
    },
    cardSummary: {
      fr: 'Site associatif refondu aux couleurs de la Guinée, avec agenda, guide des nouveaux arrivants et back-office.',
      en: 'Association website redesigned in the colours of Guinea, with events, a newcomer guide and a back office.',
    },
    role: {
      fr: 'Développeur full-stack',
      en: 'Full-stack developer',
    },
    impact: {
      fr: 'Donne à l’association un site qu’elle peut faire vivre seule : le bureau publie événements, actualités et guides sans passer par un développeur.',
      en: 'Gives the association a website it can run on its own: the board publishes events, news and guides without needing a developer.',
    },
    highlights: [
      {
        fr: 'Refonte complète de l’interface aux couleurs de la Guinée, responsive et accessible, avec un bandeau « prochain événement » sur l’accueil.',
        en: 'Complete interface redesign in the colours of Guinea, responsive and accessible, with a “next event” banner on the home page.',
      },
      {
        fr: 'Parcours nouveaux arrivants : guide en 5 étapes, livrets PDF gérés depuis l’admin et FAQ (titre de séjour, logement, santé, banque).',
        en: 'Newcomer journey: a 5-step guide, PDF booklets managed from the admin and an FAQ (residence permit, housing, health, banking).',
      },
      {
        fr: 'Back-office EasyAdmin personnalisé : tableau de bord avec indicateurs, derniers messages et prochains événements.',
        en: 'Customised EasyAdmin back office: dashboard with key figures, latest messages and upcoming events.',
      },
      {
        fr: 'Synchronisation des adhésions depuis l’API HelloAsso et protection des routes d’administration.',
        en: 'Membership sync from the HelloAsso API and protection of administration routes.',
      },
    ],
    gallery: [
      'assets/img/projects/ag35/accueil.webp',
      'assets/img/projects/ag35/evenements.webp',
      'assets/img/projects/ag35/guide.webp',
      'assets/img/projects/ag35/faq.webp',
      'assets/img/projects/ag35/admin-dashboard.webp',
    ],
    galleryCaptions: {
      'assets/img/projects/ag35/accueil.webp': {
        fr: 'Accueil refondu : présentation de l’association, appels à l’adhésion et au don, et bandeau du prochain événement avec compte à rebours.',
        en: 'Redesigned home page: association overview, membership and donation calls to action, and a next-event banner with a countdown.',
      },
      'assets/img/projects/ag35/evenements.webp': {
        fr: 'Agenda : événements à venir et archives, avec date, lieu et tarif.',
        en: 'Events: upcoming events and archives, with date, venue and price.',
      },
      'assets/img/projects/ag35/guide.webp': {
        fr: 'Guide des nouveaux arrivants : les 5 étapes de l’installation à Rennes et les livrets PDF à télécharger.',
        en: 'Newcomer guide: the 5 steps to settle in Rennes and downloadable PDF booklets.',
      },
      'assets/img/projects/ag35/faq.webp': {
        fr: 'FAQ classée par thèmes : arrivée, logement, santé, vie quotidienne et association.',
        en: 'FAQ organised by theme: arrival, housing, health, daily life and the association.',
      },
      'assets/img/projects/ag35/admin-dashboard.webp': {
        fr: 'Tableau de bord de l’administration (données fictives) : indicateurs, derniers messages, prochains événements et accès rapides.',
        en: 'Administration dashboard (sample data): key figures, latest messages, upcoming events and shortcuts.',
      },
    },
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
    date: '2024-04-08',
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
    id: 'api-guinea-geo',
    slug: 'api-guinea-geo',
    legacySlugs: [],
    previousNames: [],
    title: {
      fr: 'Guinea Geo API',
      en: 'Guinea Geo API',
    },
    coverImage: 'assets/img/projects/api-guinea-geo-cover-premium-v2.webp',
    date: '2024-04-10',
    context: 'personal',
    projectType: 'developer-api',
    portfolioFilter: 'data',
    category: {
      fr: 'API et explorateur de données géographiques',
      en: 'Geographic data API and explorer',
    },
    domains: [
      {
        fr: 'Données géographiques ouvertes',
        en: 'Open geodata',
      },
    ],
    currentTechnologies: [
      'javascript',
      'node-js',
      'swagger',
      'vercel',
    ],
    plannedTechnologies: [],
    capabilities: [
      {
        fr: 'Exploration des subdivisions et recherche par nom',
        en: 'Subdivision explorer and name search',
      },
      {
        fr: 'Copie et téléchargement des données JSON',
        en: 'Copy and download JSON data',
      },
      {
        fr: 'Documentation et requêtes interactives',
        en: 'Documentation and interactive requests',
      },
    ],
    demo: 'https://api-guinea-geo.vercel.app/',
    repository: 'https://github.com/souleymanetimbidiallo/api-guinea-geo',
    description: {
      fr: 'Une API REST et un site pour explorer les subdivisions de la Guinée, rechercher un lieu et récupérer ses données en JSON.',
      en: 'A REST API and website to explore Guinea’s subdivisions, search for a place and retrieve its data as JSON.',
    },
    cardSummary: {
      fr: 'Explorer les régions et leurs subdivisions, rechercher un lieu et essayer les requêtes avant de les intégrer à une application.',
      en: 'Explore regions and their subdivisions, search for places and try requests before integrating them into an application.',
    },
    role: {
      fr: 'Conception de l’API et développement du site d’exploration',
      en: 'API design and explorer website development',
    },
    highlights: [],
    featured: true,
    editorialCaseStudy: {
      overview: {
        fr: 'Je développe Guinea Geo API pour proposer un point d’accès commun aux données territoriales guinéennes. Le site permet de parcourir les données sans écrire de code ; l’API permet de les intégrer dans une application.',
        en: 'I develop Guinea Geo API as a shared entry point to Guinean territorial data. The website lets visitors browse without writing code; the API makes the data available to applications.',
      },
      solution: {
        fr: 'L’explorateur propose cinq niveaux : régions, préfectures, sous-préfectures, communes et quartiers. Il combine recherche par nom, consultation des subdivisions, copie et téléchargement JSON. Un espace permet aussi d’exécuter des exemples de requêtes.',
        en: 'The explorer offers five levels: regions, prefectures, sub-prefectures, communes and neighborhoods. It combines name search, subdivision browsing, and JSON copying and downloads. A separate area lets visitors run sample requests.',
      },
      architecture: {
        fr: 'API Node.js avec Express et documentation Swagger, déployée sur Vercel. Le site utilise JavaScript et Leaflet pour les repères cartographiques des chefs-lieux.',
        en: 'Node.js API with Express and Swagger documentation, deployed on Vercel. The website uses JavaScript and Leaflet for map markers showing regional capitals.',
      },
      nextSteps: {
        fr: 'La couverture des communes et quartiers reste partielle. Les populations RGPH-4 correspondent au recensement de 2025, avant la réforme territoriale de 2026. Les superficies et certains rattachements restent à vérifier ; le site signale ces limites.',
        en: 'Commune and neighborhood coverage remains partial. RGPH-4 populations refer to the 2025 census, before the 2026 territorial reform. Areas and some administrative relationships still need verification; the website identifies these limitations.',
      },
    },
    caseStudy: [
      {
        title: {
          fr: 'Deux façons d’utiliser le projet',
          en: 'Two ways to use the project',
        },
        items: [
          {
            fr: 'Explorer le territoire depuis le navigateur, puis copier ou télécharger les données utiles.',
            en: 'Explore the territory in the browser, then copy or download the data you need.',
          },
          {
            fr: 'Utiliser directement les endpoints REST et consulter les paramètres dans la documentation Swagger.',
            en: 'Use the REST endpoints directly and find their parameters in the Swagger documentation.',
          },
        ],
      },
    ],
    proofBlocks: [
      {
        title: {
          fr: 'Requêtes proposées sur le site',
          en: 'Requests available on the website',
        },
        variant: 'code',
        lines: [
          {
            fr: 'GET /regions',
            en: 'GET /regions',
          },
          {
            fr: 'GET /prefectures',
            en: 'GET /prefectures',
          },
          {
            fr: 'GET /sous-prefectures',
            en: 'GET /sous-prefectures',
          },
          {
            fr: 'GET /regions/search?name=Kankan',
            en: 'GET /regions/search?name=Kankan',
          },
          {
            fr: 'GET /regions/stats',
            en: 'GET /regions/stats',
          },
        ],
      },
      {
        title: {
          fr: 'Réponse réelle : Kankan (extrait)',
          en: 'Actual response: Kankan (excerpt)',
        },
        variant: 'code',
        lines: [
          {
            fr: '{',
            en: '{',
          },
          {
            fr: '  "name": "Kankan",',
            en: '  "name": "Kankan",',
          },
          {
            fr: '  "zone": "Est",',
            en: '  "zone": "Est",',
          },
          {
            fr: '  "administrativeStatus": "active",',
            en: '  "administrativeStatus": "active",',
          },
          {
            fr: '  "metricsStatus": "legacy-unverified",',
            en: '  "metricsStatus": "legacy-unverified",',
          },
          {
            fr: '  "populationReferenceYear": 2025,',
            en: '  "populationReferenceYear": 2025,',
          },
          {
            fr: '  "populationStatus": "preliminary"',
            en: '  "populationStatus": "preliminary"',
          },
          {
            fr: '}',
            en: '}',
          },
        ],
      },
    ],
    gallery: [
      'assets/img/projects/api-guinea-geo/conakry-detail.png',
      'assets/img/projects/api-guinea-geo/kankan-api-response.png',
    ],
    galleryCaptions: {
      'assets/img/projects/api-guinea-geo/conakry-detail.png': {
        fr: 'Fiche de Conakry dans l’explorateur : données de population référencées, sources, limites de validité et accès aux communes. Les données peuvent être copiées ou téléchargées en JSON.',
        en: 'Conakry in the explorer: referenced population data, sources, validity limitations and access to communes. Data can be copied or downloaded as JSON.',
      },
      'assets/img/projects/api-guinea-geo/kankan-api-response.png': {
        fr: 'Requête GET /regions/search?name=Kankan exécutée depuis le site : réponse HTTP 200 et données JSON consultables directement dans l’interface.',
        en: 'GET /regions/search?name=Kankan executed from the website: an HTTP 200 response and JSON data viewable directly in the interface.',
      },
    },
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
      'assets/img/projects/kaglob/kaglob2.webp',
    ],
    highlights: [],
  },
  {
    id: 'yiidein',
    slug: 'yiidein',
    legacySlugs: [],
    previousNames: [],
    title: { fr: 'Yiidein', en: 'Yiidein' },
    coverImage: 'assets/img/projects/yiidein/cover.webp',
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
      'assets/img/projects/yiidein/homepage.webp',
    ],
    highlights: [],
  },
  {
    id: 'gn-exams-2026',
    slug: 'gn-exams-2026',
    legacySlugs: ['examens-gn'],
    previousNames: [],
    title: { fr: 'GN Exams 2026', en: 'GN Exams 2026' },
    coverImage: 'assets/img/projects/gn-exams-2026/cover.webp',
    description: {
      fr: 'Application de traitement, d’analyse et de visualisation des résultats des examens nationaux de Guinée en 2026.',
      en: "Application for processing, analyzing, and visualizing Guinea's 2026 national examination results.",
    },
    cardSummary: {
      fr: 'Explorer les résultats des examens guinéens par établissement et région, consulter les classements et partager des cartes.',
      en: 'Explore Guinean examination results by school and region, view rankings and share result cards.',
    },
    detailSummary: {
      fr: 'Trois applications Streamlit (CEE, BEPC, BAC) qui transforment plus de 300 000 résultats d’admis publiés en fichiers bruts en outils de recherche, de classement et de comparaison par établissement et par région.',
      en: 'Three Streamlit applications (CEE, BEPC, BAC) that turn more than 300,000 admitted-candidate results, published as raw files, into tools for searching, ranking and comparing schools and regions.',
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
    repositories: [
      { label: { fr: 'CEE', en: 'CEE' }, url: 'https://github.com/souleymanetimbidiallo/gn-exams-cee-2026' },
      { label: { fr: 'BEPC', en: 'BEPC' }, url: 'https://github.com/souleymanetimbidiallo/gn-exams-bepc-2026' },
      { label: { fr: 'BAC', en: 'BAC' }, url: 'https://github.com/souleymanetimbidiallo/gn-exams-bac-2026' },
    ],
    plannedTechnologies: [],
    capabilities: [
      { fr: 'Analyse des résultats d’examens', en: 'Examination-result analysis' },
      { fr: 'Classements', en: 'Rankings' },
      { fr: 'Vues établissements et élèves', en: 'School and student views' },
      { fr: 'Analyse régionale', en: 'Regional analysis' },
      { fr: 'Statistiques nationales officielles', en: 'Official national statistics' },
      { fr: 'Carte interactive de la Guinée', en: 'Interactive Guinea map' },
      { fr: 'Cartes partageables des établissements et élèves', en: 'Shareable school and student cards' },
    ],
    capabilityGroups: [
      {
        title: { fr: 'Traitement des données', en: 'Data processing' },
        items: [
          { fr: 'Nettoyage et normalisation des listes officielles (Excel)', en: 'Cleaning and normalizing official lists (Excel)' },
          { fr: 'Conversion en Parquet ou CSV compressé pour un chargement rapide', en: 'Conversion to Parquet or compressed CSV for fast loading' },
          { fr: 'Requêtes analytiques avec DuckDB (CEE)', en: 'Analytical queries with DuckDB (CEE)' },
          { fr: 'Contrôle automatique des totaux par rapport aux chiffres officiels', en: 'Automatic cross-check of totals against official figures' },
        ],
      },
      {
        title: { fr: 'Analyses', en: 'Analytics' },
        items: [
          { fr: 'Recherche par nom, PV, centre ou établissement', en: 'Search by name, exam number, centre or school' },
          { fr: 'Classements des élèves, établissements et centres', en: 'Student, school and exam-centre rankings' },
          { fr: 'Analyse régionale (IRE, DPE)', en: 'Regional analysis (IRE, DPE)' },
          { fr: 'Vue nationale : inscrits, admis, taux de réussite et statistiques féminines', en: 'National view: registered, admitted, pass rates and female statistics' },
        ],
      },
      {
        title: { fr: 'Visualisation et partage', en: 'Visualization and sharing' },
        items: [
          { fr: 'Graphiques interactifs Plotly', en: 'Interactive Plotly charts' },
          { fr: 'Carte interactive de la Guinée avec Pydeck (CEE)', en: 'Interactive Guinea map with Pydeck (CEE)' },
          { fr: 'Cartes de résultats partageables en image (CEE)', en: 'Shareable result cards as images (CEE)' },
          { fr: 'Export CSV des résultats filtrés', en: 'CSV export of filtered results' },
        ],
      },
    ],
    highlights: [
      { fr: '3 applications en ligne : CEE, BEPC et BAC 2026.', en: '3 live applications: CEE, BEPC and BAC 2026.' },
      { fr: 'Plus de 300 000 admis traités : environ 188 000 au CEE, 78 000 au BEPC et 34 000 au BAC.', en: 'More than 300,000 admitted candidates processed: about 188,000 for the CEE, 78,000 for the BEPC and 34,000 for the BAC.' },
      { fr: 'Des milliers d’établissements d’origine et plus de 250 centres d’examen classés pour le seul BAC.', en: 'Thousands of schools of origin, and more than 250 exam centres ranked for the BAC alone.' },
      { fr: 'Logique de classement et de statistiques couverte par des tests unitaires (BAC, BEPC).', en: 'Ranking and statistics logic covered by unit tests (BAC, BEPC).' },
      { fr: 'Suite d’une première analyse des résultats 2023, réalisée avec Python et Pandas (dépôt examens-gn-2023 sur GitHub).', en: 'Follow-up to a first analysis of the 2023 results, built with Python and Pandas (examens-gn-2023 repository on GitHub).' },
    ],
    editorialCaseStudy: {
      overview: {
        fr: 'GN Exams 2026 regroupe trois applications, une par examen national guinéen (CEE, BEPC, BAC). Chacune permet de retrouver un candidat, de classer les établissements et les centres d’examen, et de lire les résultats à l’échelle d’une région ou du pays.',
        en: 'GN Exams 2026 brings together three applications, one for each Guinean national examination (CEE, BEPC, BAC). Each one lets people find a candidate, rank schools and exam centres, and read results at regional or national level.',
      },
      problem: {
        fr: 'Chaque année, les résultats sont publiés sous forme de longues listes d’admis, en Excel ou en PDF. On peut y chercher un nom, mais pas répondre à des questions simples : quels établissements obtiennent le plus de mentions ? Comment se situe une région ? Ces fichiers ont aussi leurs limites : ils ne contiennent que les admis, et certains totaux officiels se contredisent.',
        en: 'Every year, results are published as long lists of admitted candidates, in Excel or PDF. You can look up a name, but you cannot answer simple questions: which schools earn the most honours? How does a region compare? These files also have limits: they only list admitted candidates, and some official totals contradict each other.',
      },
      solution: {
        fr: 'J’ai construit une application par examen, avec la même logique : une recherche multicritère, des classements, des graphiques interactifs et une vue nationale fondée sur le tableau statistique officiel. Les établissements sont classés selon un score d’excellence transparent (Très Bien × 5 + Bien × 3 + Assez Bien × 1), affiché dans l’application. Je ne calcule pas de taux de réussite là où les données ne le permettent pas.',
        en: 'I built one application per examination, all following the same logic: multi-criteria search, rankings, interactive charts and a national view based on the official statistics table. Schools are ranked with a transparent excellence score (Very Good × 5 + Good × 3 + Fairly Good × 1), shown in the application. I do not compute pass rates where the data cannot support them.',
      },
      architecture: {
        fr: 'Applications Python et Streamlit, déployées sur Streamlit Community Cloud. Les fichiers Excel sources sont convertis une fois en Parquet ou en CSV compressé, puis chargés avec Pandas. L’application CEE, la plus volumineuse avec environ 188 000 lignes, s’appuie sur DuckDB pour ses requêtes et sur Pydeck pour sa carte. Les graphiques sont faits avec Plotly.',
        en: 'Python and Streamlit applications, deployed on Streamlit Community Cloud. The source Excel files are converted once to Parquet or compressed CSV, then loaded with Pandas. The CEE application, the largest with about 188,000 rows, relies on DuckDB for its queries and on Pydeck for its map. Charts are built with Plotly.',
      },
      outcome: {
        fr: 'Les trois applications sont en ligne et permettent d’explorer plus de 300 000 résultats. Chaque application vérifie automatiquement ses données détaillées par rapport aux totaux officiels. Elle signale aussi les incohérences de la source, comme un total de filles inscrites au BEPC incompatible avec le détail par filière.',
        en: 'All three applications are live and make more than 300,000 results explorable. Each application automatically checks its detailed data against the official totals. It also flags inconsistencies in the source, such as a BEPC total of registered girls that does not match the breakdown by track.',
      },
    },
    caseStudy: [
      {
        title: { fr: 'Fiabilité des données', en: 'Data reliability' },
        items: [
          { fr: 'Les sources ne listent que les admis : aucun taux de réussite régional n’est inventé, seuls les taux nationaux officiels sont affichés.', en: 'The sources only list admitted candidates: no regional pass rate is made up, and only official national rates are shown.' },
          { fr: 'Les 34 340 admis détaillés du BAC sont comparés automatiquement aux totaux du tableau officiel.', en: 'The 34,340 detailed BAC admissions are automatically compared with the totals in the official table.' },
          { fr: 'La part avec mention est présentée comme telle, et non comme un taux de réussite.', en: 'The share of candidates with honours is presented as such, not as a pass rate.' },
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
  },
  {
    id: 'timbi-pos',
    slug: 'timbi-pos',
    legacySlugs: [],
    previousNames: [],
    title: { fr: 'TimbiPOS', en: 'TimbiPOS' },
    coverImage: 'assets/img/projects/timbi-pos/caisse.webp',
    date: '2026-04-30',
    repository: 'https://github.com/souleymanetimbidiallo/timbi_pos',
    description: {
      fr: 'Application de caisse sur tablette Android pour les restaurants en Guinée, conçue pour fonctionner entièrement hors ligne.',
      en: 'Android tablet point-of-sale app for restaurants in Guinea, designed to work fully offline.',
    },
    cardSummary: {
      fr: 'Caisse tactile hors ligne pour restaurants : panier, paiement en espèces ou Orange Money, historique et rapports du jour.',
      en: 'Offline touch-screen till for restaurants: cart, cash or Orange Money payment, sales history and daily reports.',
    },
    detailSummary: {
      fr: 'TimbiPOS est une caisse Flutter pour tablette Android. Elle permet d’encaisser une commande en quelques gestes, sans connexion internet, et donne au gérant une vue claire des ventes de la journée.',
      en: 'TimbiPOS is a Flutter till for Android tablets. It lets staff ring up an order in a few taps, with no internet connection, and gives the manager a clear view of the day’s sales.',
    },
    role: { fr: 'Conception et développement de l’application mobile', en: 'Mobile application design and development' },
    context: 'personal',
    projectType: 'mobile-application',
    portfolioFilter: 'mobile',
    category: { fr: 'Application mobile de caisse', en: 'Point-of-sale mobile application' },
    domains: [
      { fr: 'Restauration', en: 'Food service' },
      { fr: 'Commerce', en: 'Retail' },
    ],
    currentTechnologies: ['dart', 'flutter', 'riverpod', 'sqlite'],
    plannedTechnologies: [],
    capabilities: [
      { fr: 'Caisse tactile par catégories', en: 'Touch-screen till by category' },
      { fr: 'Paiement espèces et Orange Money', en: 'Cash and Orange Money payment' },
      { fr: 'Fonctionnement 100 % hors ligne', en: '100% offline operation' },
      { fr: 'Historique des ventes', en: 'Sales history' },
      { fr: 'Rapports du jour', en: 'Daily reports' },
      { fr: 'Gestion des produits', en: 'Product management' },
    ],
    capabilityGroups: [
      {
        title: { fr: 'Encaissement', en: 'Checkout' },
        items: [
          { fr: 'Produits classés par catégories (plats, boissons, desserts…)', en: 'Products sorted by category (dishes, drinks, desserts…)' },
          { fr: 'Panier avec quantités modifiables et total recalculé', en: 'Cart with editable quantities and live total' },
          { fr: 'Paiement en espèces ou Orange Money', en: 'Cash or Orange Money payment' },
          { fr: 'Calcul automatique de la monnaie à rendre', en: 'Automatic change calculation' },
        ],
      },
      {
        title: { fr: 'Suivi des ventes', en: 'Sales tracking' },
        items: [
          { fr: 'Historique des ventes par jour, avec le détail de chaque vente', en: 'Daily sales history with the details of each sale' },
          { fr: 'Chiffre du jour, nombre de ventes et panier moyen', en: 'Daily revenue, number of sales and average basket' },
          { fr: 'Répartition par mode de paiement et meilleurs produits', en: 'Breakdown by payment method and top products' },
          { fr: 'Ventes par heure et meilleure heure de la journée', en: 'Sales by hour and best hour of the day' },
        ],
      },
      {
        title: { fr: 'Gestion', en: 'Management' },
        items: [
          { fr: 'Ajout et modification de produits avec photo', en: 'Add and edit products with a photo' },
          { fr: 'Produits actifs ou désactivés dans la caisse', en: 'Products enabled or disabled in the till' },
          { fr: 'Import du menu du restaurant en un clic', en: 'One-tap import of the restaurant menu' },
          { fr: 'Espace manager protégé par code PIN', en: 'Manager area protected by a PIN code' },
        ],
      },
    ],
    highlights: [
      { fr: 'Pensée pour un vrai restaurant : le menu complet (plats, boissons, desserts) est chargé dans l’application.', en: 'Built for a real restaurant: the full menu (dishes, drinks, desserts) is loaded into the app.' },
      { fr: 'Aucune dépendance à internet : produits et ventes sont enregistrés en local dans SQLite.', en: 'No dependency on the internet: products and sales are stored locally in SQLite.' },
      { fr: 'Interface tactile à gros boutons, pensée pour encaisser vite pendant les heures de pointe.', en: 'Touch interface with large buttons, designed for fast checkout during rush hours.' },
    ],
    editorialCaseStudy: {
      overview: {
        fr: 'TimbiPOS est une application de caisse pour tablette Android, destinée aux restaurants en Guinée. Le caissier compose la commande, encaisse en espèces ou par Orange Money, et le gérant suit les ventes de la journée.',
        en: 'TimbiPOS is a point-of-sale app for Android tablets, built for restaurants in Guinea. The cashier builds the order and takes payment in cash or via Orange Money, while the manager follows the day’s sales.',
      },
      problem: {
        fr: 'Dans beaucoup de restaurants, les ventes sont encore notées à la main. Les caisses du marché supposent une connexion internet stable, ce qui n’est pas toujours le cas en Guinée. Il fallait une caisse qui marche sans réseau, qu’un caissier peu habitué aux outils numériques prend en main tout de suite, et qui reste rapide pendant le rush.',
        en: 'In many restaurants, sales are still written down by hand. Off-the-shelf tills assume a stable internet connection, which is not always available in Guinea. The need was for a till that works without a network, that a cashier with little digital experience can pick up right away, and that stays fast during the rush.',
      },
      solution: {
        fr: 'J’ai conçu une interface en quatre écrans (Caisse, Historique, Produits, Rapports), avec de gros boutons et un minimum d’étapes. Une commande se compose en touchant les produits, puis se valide en un écran de paiement qui calcule la monnaie à rendre. Les écrans de gestion sont réservés au manager.',
        en: 'I designed an interface with four screens (Till, History, Products, Reports), with large buttons and as few steps as possible. An order is built by tapping products, then confirmed on a single payment screen that calculates the change. Management screens are reserved for the manager.',
      },
      architecture: {
        fr: 'Application Flutter organisée par fonctionnalités (caisse, panier, ventes, produits, historique, rapports). L’état est géré avec Riverpod, la navigation avec go_router, et toutes les données sont stockées localement dans SQLite (sqflite), sans serveur.',
        en: 'Flutter application organized by feature (till, cart, sales, products, history, reports). State is managed with Riverpod, navigation with go_router, and all data is stored locally in SQLite (sqflite), with no server.',
      },
      nextSteps: {
        fr: 'Synchronisation cloud, gestion de plusieurs restaurants, impression des tickets et tableau de bord web pour le gérant.',
        en: 'Cloud sync, support for several restaurants, receipt printing and a web dashboard for the manager.',
      },
    },
    galleryCaptions: {
      'assets/img/projects/timbi-pos/paiement.webp': { fr: 'Paiement — choix entre espèces et Orange Money, avec calcul de la monnaie à rendre.', en: 'Payment — choice between cash and Orange Money, with change calculation.' },
      'assets/img/projects/timbi-pos/historique.webp': { fr: 'Historique — ventes du jour, total et mode de paiement de chaque vente.', en: 'History — the day’s sales, total and payment method for each sale.' },
      'assets/img/projects/timbi-pos/detail-vente.webp': { fr: 'Détail d’une vente — heure, mode de paiement et articles.', en: 'Sale details — time, payment method and items.' },
      'assets/img/projects/timbi-pos/rapports.webp': { fr: 'Rapports — chiffre du jour, panier moyen, meilleurs produits et ventes par heure.', en: 'Reports — daily revenue, average basket, top products and sales by hour.' },
      'assets/img/projects/timbi-pos/produits.webp': { fr: 'Produits — liste du menu avec catégorie, prix et statut.', en: 'Products — menu list with category, price and status.' },
      'assets/img/projects/timbi-pos/ajout-produit.webp': { fr: 'Ajout d’un produit — photo, nom, prix, catégorie et activation.', en: 'Adding a product — photo, name, price, category and status.' },
    },
    status: 'completed',
    featured: false,
    gallery: [
      'assets/img/projects/timbi-pos/paiement.webp',
      'assets/img/projects/timbi-pos/historique.webp',
      'assets/img/projects/timbi-pos/detail-vente.webp',
      'assets/img/projects/timbi-pos/rapports.webp',
      'assets/img/projects/timbi-pos/produits.webp',
      'assets/img/projects/timbi-pos/ajout-produit.webp',
    ],
  },
];
