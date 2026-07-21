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

  /* HERO */
  'hero.kicker': {
    fr: 'Ingénieur logiciel full-stack',
    en: 'Full-stack Software Engineer',
  },
  'hero.role': { fr: 'Ingénieur logiciel full-stack', en: 'Full-Stack Software Engineer' },
  'hero.lead': {
    fr: 'Je conçois des applications d’entreprise et des produits numériques avec Java, Spring Boot, Angular, PHP, Laravel et Symfony.',
    en: 'Building enterprise applications and digital products with Java, Spring Boot, Angular, PHP, Laravel, and Symfony.',
  },
  'hero.engineeringFocus': { fr: 'Ingénierie d’entreprise · Produit · Data', en: 'Enterprise engineering · Product · Data' },
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
  'hero.primaryLabel': { fr: 'Écosystème principal', en: 'Primary ecosystem' },
  'hero.secondaryLabel': { fr: 'Écosystème complémentaire', en: 'Supporting ecosystem' },
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
  'about.eyebrow': { fr: 'Profil professionnel', en: 'Professional profile' },
  'about.summary': { fr: 'Une expérience full-stack entre applications d’entreprise, écosystèmes Java et PHP, développement produit et projets data.', en: 'A full-stack background spanning enterprise applications, Java and PHP ecosystems, product development, and data projects.' },
  'about.enterprise.title': { fr: 'Ingénierie d’entreprise', en: 'Enterprise engineering' },
  'about.enterprise.text': { fr: 'Expérience avec Java, Spring et Angular sur la maintenance et l’évolution d’applications métier, les API, les bases de données, la recherche et la CI/CD.', en: 'Java, Spring, and Angular experience maintaining and evolving business applications across APIs, databases, search, and CI/CD.' },
  'about.php.title': { fr: 'Écosystème PHP', en: 'PHP ecosystem' },
  'about.php.text': { fr: 'Expérience avec PHP, Symfony, Laravel et Drupal sur des applications web d’entreprise et des produits logiciels.', en: 'PHP, Symfony, Laravel, and Drupal experience across enterprise web applications and software products.' },
  'about.product.title': { fr: 'Produit et données', en: 'Product and data' },
  'about.product.text': { fr: 'Conception de produits avec KAGLOB ERP et Yiidein, complétée par CEE 2026 et des projets civiques et open data.', en: 'Product work through KAGLOB ERP and Yiidein, complemented by CEE 2026 and civic and open-data projects.' },
  'skills.eyebrow': { fr: 'Capacités techniques', en: 'Engineering capabilities' },
  'skills.title': { fr: 'Compétences', en: 'Skills' },
  'skills.subtitle': { fr: 'Technologies utilisées dans les expériences et projets présentés, regroupées par écosystème.', en: 'Technologies used across the featured experience and projects, organized by engineering ecosystem.' },
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
  'portfolio.subtitle': {
    fr: 'Applications d’entreprise, produits logiciels et projets data construits dans des écosystèmes Java, PHP et Python.',
    en: 'Enterprise applications, software products, and data projects built across Java, PHP, and Python ecosystems.',
  },
  'portfolio.eyebrow': { fr: 'Travaux sélectionnés', en: 'Selected work' },
  'portfolio.featured': { fr: 'Produits et projets data phares', en: 'Featured product and data work' },
  'portfolio.featuredIntro': { fr: 'Une sélection de produits en développement, de technologie civique et d’analyse de données.', en: 'A selection spanning active product development, civic technology, and data analytics.' },
  'portfolio.selected': { fr: 'Projets web, mobile et open data', en: 'Web, mobile, and open-data projects' },
  'portfolio.filtered': { fr: 'Projets filtrés', en: 'Filtered projects' },
  'portfolio.indexIntro': { fr: 'Filtrer la sélection par format de portfolio.', en: 'Filter the project selection by portfolio format.' },
  'portfolio.filterLabel': { fr: 'Filtrer les projets', en: 'Filter projects' },
  'portfolio.viewDetails': { fr: 'Voir le projet', en: 'View project' },
  'portfolio.see': { fr: 'Voir', en: 'View' },
  'portfolio.count': { fr: 'projet(s)', en: 'project(s)' },
  'project.demo': { fr: 'Démo', en: 'Demo' },
  'project.repo': { fr: 'Code source', en: 'Source code' },

  /* BLOG */
  'blog.title': { fr: 'Blog', en: 'Blog' },
  'blog.eyebrow': { fr: 'Écriture technique', en: 'Technical writing' },
  'blog.sectionTitle': { fr: 'Publications techniques', en: 'Technical Writing' },
  'blog.subtitle': {
    fr: 'Apprenez, explorez, codez. Le blog qui vous accompagne',
    en: 'Learn, explore, code. A blog to support your journey',
  },
  'blog.readMore': { fr: 'Lire plus', en: 'Read more' },

  /* CONTACT */
  'contact.title': { fr: 'Construisons des logiciels fiables', en: 'Let’s build reliable software' },
  'contact.lead': {
    fr: 'Je suis intéressé par des opportunités en ingénierie logicielle full-stack où je peux contribuer au backend, au frontend et à la réalisation produit.',
    en: 'I am interested in full-stack software engineering opportunities where I can contribute across backend, frontend, and product delivery.',
  },
  'contact.email': { fr: 'Envoyer un email', en: 'Send an email' },
  'contact.linkedin': { fr: 'Voir LinkedIn', en: 'View LinkedIn' },
  'contact.github': { fr: 'Voir GitHub', en: 'View GitHub' },
  'contact.resume': { fr: 'Télécharger le CV', en: 'Download résumé' },
  'contact.availabilityLabel': { fr: 'Disponibilité', en: 'Availability' },
  'contact.availability': { fr: 'Remote international & hybride selon opportunité', en: 'Remote worldwide & hybrid depending on the role' },
  'contact.focusLabel': { fr: 'Domaines', en: 'Focus' },
  'contact.focus': { fr: 'Full-stack, API, data products', en: 'Full-stack, APIs, data products' },

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
  'project.technicalProof': { fr: 'Preuves techniques', en: 'Technical proof' },
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
  'project.selectedCapabilities': { fr: 'Fonctionnalités sélectionnées', en: 'Selected capabilities' },
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
  'timeline.title': { fr: 'Expérience professionnelle et formation', en: 'Professional Experience and Education' },
  'timeline.eyebrow': { fr: 'Expérience professionnelle', en: 'Professional experience' },
  'timeline.intro': { fr: 'Expériences en entreprise et engagements techniques, présentés avec leur contexte et leur écosystème propre.', en: 'Enterprise roles and technical engagements, each presented with its own context and technology ecosystem.' },
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
