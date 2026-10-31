import { AppLanguage } from './language.service';

export const TRANSLATIONS: Record<string, Record<AppLanguage, string>> = {
  /* NAVIGATION */
  'nav.home': { fr: 'Accueil', en: 'Home' },
  'nav.about': { fr: 'À propos', en: 'About' },
  'nav.timeline': { fr: 'Parcours', en: 'Experience' },
  'nav.services': { fr: 'Services', en: 'Services' },
  'nav.portfolio': { fr: 'Portfolio', en: 'Portfolio' },
  'nav.projects': { fr: 'Projets', en: 'Projects' },
  'nav.skills': { fr: 'Compétences', en: 'Skills' },
  'nav.blog': { fr: 'Blog', en: 'Blog' },
  'nav.contact': { fr: 'Contact', en: 'Contact' },
  'nav.primary': { fr: 'Navigation principale', en: 'Primary navigation' },
  'nav.open': { fr: 'Ouvrir la navigation', en: 'Open navigation' },
  'nav.close': { fr: 'Fermer la navigation', en: 'Close navigation' },
  'nav.language': { fr: 'Changer la langue', en: 'Change language' },
  'theme.label': { fr: 'Thème', en: 'Theme' },
  'theme.system': { fr: 'Système', en: 'System' },
  'theme.light': { fr: 'Clair', en: 'Light' },
  'theme.dark': { fr: 'Sombre', en: 'Dark' },
  'theme.useSystem': { fr: 'Utiliser le thème du système', en: 'Use system theme' },
  'theme.useLight': { fr: 'Utiliser le thème clair', en: 'Use light theme' },
  'theme.useDark': { fr: 'Utiliser le thème sombre', en: 'Use dark theme' },

  /* HERO */
  'hero.kicker': {
    fr: 'Ingénieur logiciel full-stack',
    en: 'Full-stack Software Engineer',
  },
  'hero.role': { fr: 'Ingénieur logiciel full-stack', en: 'Full-Stack Software Engineer' },
  'hero.lead': { fr: 'Je développe des applications web, de l’API à l’interface. Ici, je présente mon travail en entreprise et mes projets personnels, dont plusieurs autour des services et des données en Guinée.', en: 'I build web applications, from APIs to user interfaces. Here you’ll find my work in companies and my own projects, including services and data tools focused on Guinea.' },
  'hero.engineeringFocus': { fr: 'Le portfolio de', en: 'The portfolio of' },
  'hero.locationLabel': { fr: 'Localisation', en: 'Location' },
  'hero.focus': {
    fr: 'Disponible pour des opportunités full-stack, backend/API et data.',
    en: 'Open to full-stack, backend/API, and data opportunities.',
  },
  'hero.projects': { fr: 'Voir mes projets', en: 'View projects' },
  'hero.contact': { fr: 'Me contacter', en: 'Contact me' },
  'hero.cv': { fr: 'Télécharger CV', en: 'Download resume' },
  'hero.professionalLinks': { fr: 'Liens professionnels', en: 'Professional links' },
  'hero.technicalIdentity': { fr: 'Positionnement technique', en: 'Technical positioning' },
  'hero.primaryLabel': { fr: 'Au quotidien', en: 'My main tools' },
  'hero.secondaryLabel': { fr: 'Aussi dans mes projets', en: 'Also in my projects' },
  'hero.identityNote': { fr: 'Applications d’entreprise, produits logiciels et projets data.', en: 'Enterprise applications, software products, and data projects.' },
  'hero.rotator': {
    fr: 'Angular & Java, REST APIs, Python & Data, Cloud-ready apps',
    en: 'Angular & Java, REST APIs, Python & Data, Cloud-ready apps',
  },

  /* ABOUT */
  'about.role': {
    fr: 'Ingénieur Logiciel · Développeur full-stack',
    en: 'Software Engineer · Fullstack Developer',
  },
  'about.coreSkills': { fr: 'Compétences clés', en: 'Key skills' },
  'about.title': { fr: 'À propos', en: 'About' },
  'about.eyebrow': { fr: 'Derrière le code', en: 'Behind the code' },
  'about.summary': { fr: 'Mon parcours mêle le travail sur des applications existantes et la création de mes propres projets. Deux façons d’apprendre que je présente ici.', en: 'My background combines working on existing applications and building my own projects. This portfolio brings together both sides of that work.' },
  'about.enterprise.title': { fr: 'En entreprise', en: 'In teams' },
  'about.enterprise.text': { fr: 'J’ai contribué à la maintenance et à l’évolution d’applications métier : API, bases de données, recherche et intégration continue. Mon parcours comprend notamment des missions en Java, Spring et Angular.', en: 'I’ve helped maintain and extend business applications, working on APIs, databases, search and continuous integration, including projects with Java, Spring and Angular.' },
  'about.php.title': { fr: 'Côté web', en: 'Web development' },
  'about.php.text': { fr: 'J’ai aussi travaillé sur des applications PHP avec Symfony et Drupal. Pour KAGLOB ERP, je développe avec Laravel des fonctions de gestion de flotte et de location de véhicules.', en: 'I’ve also worked on PHP applications with Symfony and Drupal. For KAGLOB ERP, I’m using Laravel to build fleet and vehicle rental management features.' },
  'about.product.title': { fr: 'Mes projets personnels', en: 'My own projects' },
  'about.product.text': { fr: 'Avec GN Exams, je travaille sur les résultats des examens guinéens. Avec Yiidein, sur la prise de rendez-vous. Chaque projet a sa fiche, ses captures et son état d’avancement.', en: 'With GN Exams, I work with Guinean examination results. With Yiidein, I’m building appointment booking. Each project has its own page, screenshots and development status.' },
  'skills.eyebrow': { fr: 'Ma boîte à outils', en: 'My toolkit' },
  'skills.title': { fr: 'Compétences', en: 'Skills' },
  'skills.subtitle': { fr: 'Les outils que j’utilise, à retrouver dans les projets et les missions ci-dessous.', en: 'The tools I use, with examples in the projects and roles below.' },
  'skills.java': { fr: 'Java et backend', en: 'Java and backend' },
  'skills.frontend': { fr: 'Frontend', en: 'Frontend' },
  'skills.php': { fr: 'Écosystème PHP', en: 'PHP ecosystem' },
  'skills.data': { fr: 'Données et bases', en: 'Data and databases' },
  'skills.delivery': { fr: 'DevOps et livraison', en: 'DevOps and delivery' },
  'about.p1': {
    fr: 'Ingénieur logiciel passionné, spécialisé en développement Fullstack avec un intérêt croissant pour la Data et le DevOps.',
    en: 'Passionate software engineer specialized in fullstack development, with growing interest in Data and DevOps.',
  },
  'about.p2': {
    fr: 'J’ai travaillé sur des projets variés (applications web, mobiles, data), en entreprise et à titre personnel, avec le souci de créer des solutions fiables et utiles.',
    en: 'I worked on diverse projects (web, mobile, data), both in companies and personal initiatives, always focused on building reliable and useful solutions.',
  },
  'about.p3': {
    fr: 'Mon objectif : mettre mes compétences au service de projets ambitieux et contribuer à transformer les idées en réalisations concrètes.',
    en: 'My goal: put my skills to work on ambitious projects and help turn ideas into concrete outcomes.',
  },
  'about.availability': {
    fr: 'Ouvert aux opportunités remote, hybrides ou en présentiel selon le projet.',
    en: 'Open to remote, hybrid, or on-site opportunities depending on the role.',
  },
  'about.skills.fullstack': {
    fr: 'Développement Full-Stack',
    en: 'Full-Stack Development',
  },
  'about.skills.api': { fr: 'Conception d’API REST', en: 'REST API Design' },
  'about.skills.architecture': {
    fr: 'Architecture logicielle',
    en: 'Software Architecture',
  },
  'about.skills.microservices': { fr: 'Microservices', en: 'Microservices' },
  'about.skills.cloud': {
    fr: 'Applications Cloud-Ready',
    en: 'Cloud-Ready Applications',
  },

  /* TECH STACK */
  'tech.title': {
    fr: 'Tech Stack',
    en: 'Tech Stack',
  },
  'tech.subtitle': {
    fr: 'Les principales technologies et outils que j’utilise pour concevoir et livrer des applications robustes.',
    en: 'Main technologies and tools I use to design and deliver robust applications.',
  },

  'tech.frontend.title': {
    fr: 'Frontend',
    en: 'Frontend',
  },
  'tech.frontend.items': {
    fr: 'Angular, TypeScript, JavaScript, Bootstrap, HTML, CSS',
    en: 'Angular, TypeScript, JavaScript, Bootstrap, HTML, CSS',
  },

  'tech.backend.title': {
    fr: 'Backend',
    en: 'Backend',
  },
  'tech.backend.items': {
    fr: 'Java, Spring Boot, Node.js, Express, API REST',
    en: 'Java, Spring Boot, Node.js, Express, REST APIs',
  },

  'tech.database.title': {
    fr: 'Base de données',
    en: 'Database',
  },
  'tech.database.items': {
    fr: 'PostgreSQL, MySQL, MongoDB',
    en: 'PostgreSQL, MySQL, MongoDB',
  },

  'tech.devops.title': {
    fr: 'DevOps',
    en: 'DevOps',
  },
  'tech.devops.items': {
    fr: 'Docker, Git, CI/CD',
    en: 'Docker, Git, CI/CD',
  },

  'tech.cloud.title': {
    fr: 'Cloud',
    en: 'Cloud',
  },
  'tech.cloud.items': {
    fr: 'AWS, déploiement d’applications, architecture prête pour le cloud',
    en: 'AWS, application deployment, cloud-ready architecture',
  },

  'tech.tools.title': {
    fr: 'Outils & méthodes',
    en: 'Tools & Methods',
  },
  'tech.tools.items': {
    fr: 'GitHub, VS Code, Postman, Agile, Scrum',
    en: 'GitHub, VS Code, Postman, Agile, Scrum',
  },

  /* SERVICES */
  'services.subtitle': {
    fr: 'Comment je peux vous aider à livrer vite et bien.',
    en: 'How I can help you deliver fast and with quality.',
  },
  'services.cta': { fr: 'Discuter', en: 'Let’s talk' },

  /* PROCESS */
  'process.subtitle': {
    fr: 'Un flux simple et efficace pour livrer vite et bien',
    en: 'A simple and efficient workflow to deliver quickly and effectively',
  },

  /* PORTFOLIO */
  'portfolio.title': { fr: 'Projets', en: 'Projects' },
  'portfolio.subtitle': { fr: 'Gestion de véhicules, prise de rendez-vous, résultats d’examens : voici les applications sur lesquelles je travaille, avec leurs captures et leurs détails techniques.', en: 'Vehicle management, appointment booking and examination results: explore the applications I work on through screenshots and technical details.' },
  'portfolio.eyebrow': { fr: 'Travaux sélectionnés', en: 'Selected work' },
  'portfolio.featured': { fr: 'Quatre projets à découvrir', en: 'Four projects to explore' },
  'portfolio.featuredIntro': { fr: 'Certains sont terminés, d’autres encore en développement. Le statut est précisé sur chaque fiche.', en: 'Some are complete; others are still in development. Each project shows its current status.' },
  'portfolio.selected': { fr: 'Les autres projets', en: 'More projects' },
  'portfolio.filtered': { fr: 'Projets filtrés', en: 'Filtered projects' },
  'portfolio.indexIntro': { fr: 'Explorer les projets par catégorie.', en: 'Browse projects by category.' },
  'portfolio.filterLabel': { fr: 'Filtrer les projets', en: 'Filter projects' },
  'portfolio.viewDetails': { fr: 'Voir le projet', en: 'View project' },
  'portfolio.see': { fr: 'Voir', en: 'View' },
  'portfolio.count': { fr: 'projet(s)', en: 'project(s)' },
  'project.demo': { fr: 'Démo', en: 'Demo' },
  'project.demos': { fr: '3 démos', en: '3 demos' },
  'project.repo': { fr: 'Code source', en: 'Source code' },

  /* BLOG */
  'blog.title': { fr: 'Blog', en: 'Blog' },
  'blog.eyebrow': { fr: 'Notes de développement', en: 'Development notes' },
  'blog.sectionTitle': { fr: 'Ce que j’apprends et partage', en: 'What I learn and share' },
  'blog.subtitle': { fr: 'Des notes sur le développement web, mes projets et mon parcours.', en: 'Notes on web development, my projects and my career.' },
  'blog.readMore': { fr: 'Lire plus', en: 'Read more' },

  /* CONTACT */
  'contact.title': { fr: 'Parlons de votre projet', en: 'Let’s talk about your project' },
  'contact.lead': { fr: 'Vous recrutez un développeur full-stack ou souhaitez échanger sur un projet présenté ici ? Vous pouvez me joindre par email ou sur LinkedIn.', en: 'Hiring a full-stack developer or want to discuss one of these projects? Get in touch by email or on LinkedIn.' },
  'contact.email': { fr: 'Envoyer un email', en: 'Send an email' },
  'contact.linkedin': { fr: 'Voir LinkedIn', en: 'View LinkedIn' },
  'contact.github': { fr: 'Voir GitHub', en: 'View GitHub' },
  'contact.resume': { fr: 'Télécharger le CV', en: 'Download résumé' },
  'contact.availabilityLabel': { fr: 'Disponibilité', en: 'Availability' },
  'contact.availability': { fr: 'À distance, ou en hybride selon le poste', en: 'Remote, or hybrid depending on the role' },
  'contact.focusLabel': { fr: 'Domaines', en: 'Focus' },
  'contact.focus': { fr: 'Développement web, API et analyse de données', en: 'Web development, APIs and data analysis' },

  /* FOOTER */
  'footer.rights': { fr: 'Tous droits réservés', en: 'All Rights Reserved' },
  'footer.credit': { fr: 'Conçu et développé par Souleymane Diallo.', en: 'Designed and developed by Souleymane Diallo.' },

  /* PROJECT */
  'project.info': { fr: 'Informations', en: 'Information' },
  'project.role': { fr: 'Rôle', en: 'Role' },
  'project.overview': { fr: 'Vue d’ensemble', en: 'Overview' },
  'project.domains': { fr: 'Domaines', en: 'Domains' },
  'project.impact': { fr: 'Impact', en: 'Impact' },
  'project.keyPoints': { fr: 'Points clés', en: 'Key points' },
  'project.technicalProof': { fr: 'Détails techniques', en: 'Technical details' },
  'project.gallery': { fr: 'Galerie', en: 'Gallery' },
  'project.backProjects': { fr: 'Retour aux projets', en: 'Back to projects' },
  'project.category': { fr: 'Catégorie', en: 'Category' },
  'project.type': { fr: 'Type de projet', en: 'Project type' },
  'project.context': { fr: 'Contexte', en: 'Context' },
  'project.status': { fr: 'Statut', en: 'Status' },
  'project.currentStack': { fr: 'Technologies actuelles', en: 'Current stack' },
  'project.plannedModernization': { fr: 'Modernisation prévue', en: 'Planned modernization' },
  'project.plannedDisclaimer': {
    fr: 'Modernisation technique prévue; ces technologies ne font pas partie de l’implémentation actuelle.',
    en: 'Planned technical modernization; these technologies are not part of the current implementation.',
  },
  'project.capabilities': { fr: 'Fonctionnalités', en: 'Capabilities' },
  'project.selectedCapabilities': { fr: 'Ce que fait l’application', en: 'What the application does' },
  'project.context.professional': { fr: 'Projet professionnel', en: 'Professional project' },
  'project.context.personal': { fr: 'Projet personnel', en: 'Personal project' },
  'project.context.product': { fr: 'Projet produit', en: 'Product project' },
  'project.status.completed': { fr: 'Terminé', en: 'Completed' },
  'project.status.active-development': { fr: 'Développement en cours', en: 'Active development' },
  'project.status.planned-modernization': { fr: 'Modernisation prévue', en: 'Planned modernization' },
  'project.status.deployment-preparation': { fr: 'Préparation du déploiement', en: 'Deployment preparation' },
  'project.status.archived': { fr: 'Archivé', en: 'Archived' },
  'project.type.enterprise-application': { fr: 'Application d’entreprise', en: 'Enterprise application' },
  'project.type.saas-platform': { fr: 'Plateforme SaaS', en: 'SaaS platform' },
  'project.type.civic-tech-platform': { fr: 'Plateforme de technologie civique', en: 'Civic technology platform' },
  'project.type.erp-platform': { fr: 'Plateforme ERP', en: 'ERP platform' },
  'project.type.data-analytics': { fr: 'Analyse de données', en: 'Data analytics' },
  'project.type.open-data': { fr: 'Données ouvertes', en: 'Open data' },
  'project.type.e-commerce': { fr: 'E-commerce', en: 'E-commerce' },
  'project.type.cms-platform': { fr: 'Plateforme CMS', en: 'CMS platform' },
  'project.type.media-platform': { fr: 'Plateforme média', en: 'Media platform' },
  'project.type.mobile-application': { fr: 'Application mobile', en: 'Mobile application' },
  'project.type.developer-api': { fr: 'API pour développeurs', en: 'Developer API' },
  'project.type.corporate-website': { fr: 'Site institutionnel', en: 'Corporate website' },
  'project.case.overview': { fr: 'Vue d’ensemble', en: 'Overview' },
  'project.case.problem': { fr: 'Problème', en: 'Problem' },
  'project.case.solution': { fr: 'Solution', en: 'Solution' },
  'project.case.architecture': { fr: 'Architecture', en: 'Architecture' },
  'project.case.outcome': { fr: 'Résultat', en: 'Outcome' },
  'project.case.nextSteps': { fr: 'Prochaines étapes', en: 'Next steps' },

  /* TECHNOLOGY GROUPS */
  'technology.group.languages': { fr: 'Langages', en: 'Languages' },
  'technology.group.backend': { fr: 'Backend', en: 'Backend' },
  'technology.group.frontend': { fr: 'Frontend', en: 'Frontend' },
  'technology.group.cms': { fr: 'CMS', en: 'CMS' },
  'technology.group.templating': { fr: 'Templates', en: 'Templating' },
  'technology.group.databases': { fr: 'Bases de données', en: 'Databases' },
  'technology.group.search': { fr: 'Recherche', en: 'Search' },
  'technology.group.dataProcessing': { fr: 'Traitement des données', en: 'Data processing' },
  'technology.group.dataVisualization': { fr: 'Visualisation', en: 'Data visualization' },
  'technology.group.dataFormats': { fr: 'Formats de données', en: 'Data formats' },
  'technology.group.dataApplications': { fr: 'Application de données', en: 'Data application' },
  'technology.group.databaseMigration': { fr: 'Migration de base de données', en: 'Database migration' },
  'technology.group.devops': { fr: 'DevOps', en: 'DevOps' },
  'technology.group.buildTools': { fr: 'Outils de build', en: 'Build tools' },
  'technology.group.authentication': { fr: 'Authentification', en: 'Authentication' },
  'technology.group.documentation': { fr: 'Documentation', en: 'Documentation' },
  'technology.group.documents': { fr: 'Génération de documents', en: 'Document generation' },
  'technology.group.infrastructure': { fr: 'Infrastructure', en: 'Infrastructure' },
  'technology.group.deployment': { fr: 'Déploiement', en: 'Deployment' },
  'technology.group.libraries': { fr: 'Bibliothèques', en: 'Libraries' },
  'technology.group.tools': { fr: 'Outils', en: 'Tools' },
  'project.client': { fr: 'Client', en: 'Client' },
  'project.date': { fr: 'Date', en: 'Date' },
  'project.url': { fr: 'URL du projet', en: 'Project URL' },
  'project.notFound': {
    fr: 'Projet introuvable 😕',
    en: 'Project not found 😕',
  },
  'project.backHome': { fr: 'Retour à l’accueil', en: 'Back to home' },

  /* ARTICLE */
  'article.published': {
    fr: 'Publié sur le blog personnel',
    en: 'Published on my personal blog',
  },
  'article.notFound': {
    fr: 'Article introuvable',
    en: 'Article not found',
  },
  'article.backHome': { fr: 'Retour à l’accueil', en: 'Back to home' },

  /* TIMELINE */
  'timeline.title': { fr: 'Mon parcours', en: 'My background' },
  'timeline.eyebrow': { fr: 'Expérience professionnelle', en: 'Professional experience' },
  'timeline.intro': { fr: 'Les équipes avec lesquelles j’ai travaillé, les applications auxquelles j’ai contribué et ma formation.', en: 'The teams I’ve worked with, the applications I’ve contributed to and my education.' },
  'timeline.educationTitle': { fr: 'Formation', en: 'Education' },
  'timeline.enterpriseEngagements': { fr: 'Missions d’entreprise', en: 'Enterprise engagements' },
  'timeline.selectedProject': { fr: 'Projet principal', en: 'Selected project' },
  'timeline.contributions': { fr: 'Mes contributions', en: 'What I worked on' },
  'timeline.technologyStack': { fr: 'Stack technique', en: 'Technology stack' },
  'timeline.professionalProjects': { fr: 'Projets d’entreprise', en: 'Enterprise projects' },
  'timeline.internalProjectName': { fr: 'Nom interne du projet', en: 'Internal project name' },
  'timeline.confidential': {
    fr: 'Le code source et les détails d’implémentation internes sont confidentiels.',
    en: 'Source code and internal implementation details are confidential.',
  },
  'timeline.education': { fr: 'Formation', en: 'Education' },
};
