import { AppLanguage } from './language.service';

export const TRANSLATIONS: Record<string, Record<AppLanguage, string>> = {
  /* NAVIGATION */
  'nav.home': { fr: 'Accueil', en: 'Home' },
  'nav.about': { fr: 'À propos', en: 'About' },
  'nav.timeline': { fr: 'Parcours', en: 'Experience' },
  'nav.services': { fr: 'Services', en: 'Services' },
  'nav.portfolio': { fr: 'Portfolio', en: 'Portfolio' },
  'nav.blog': { fr: 'Blog', en: 'Blog' },
  'nav.contact': { fr: 'Contact', en: 'Contact' },

  /* HERO */
  'hero.lead': {
    fr: 'Je conçois des applications fiables et scalables en Java / Angular, Node & Cloud.',
    en: 'I build reliable and scalable applications with Java / Angular, Node & Cloud.',
  },
  'hero.projects': { fr: 'Voir mes projets', en: 'View projects' },
  'hero.cv': { fr: 'Télécharger CV', en: 'Download resume' },
  'hero.rotator': {
    fr: 'Data & IA, DevOps & Cloud, Applications Web performantes',
    en: 'Data & AI, DevOps & Cloud, High-performance web applications',
  },

  /* ABOUT */
  'about.role': {
    fr: 'Ingénieur Logiciel · Développeur full-stack',
    en: 'Software Engineer · Fullstack Developer',
  },
  'about.coreSkills': { fr: 'Compétences clés', en: 'Key skills' },
  'about.title': { fr: 'À propos', en: 'About' },
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
    fr: 'Ouvert aux opportunités en télétravail à l’international et aux postes en présentiel aux États-Unis.',
    en: 'Open to remote opportunities worldwide and on-site roles in the United States.',
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
    fr: 'Une sélection représentative des travaux récents.',
    en: 'A representative selection of recent work.',
  },
  'portfolio.see': { fr: 'Voir', en: 'View' },
  'portfolio.count': { fr: 'projet(s)', en: 'project(s)' },
  'project.demo': { fr: 'Démo', en: 'Demo' },
  'project.repo': { fr: 'Code source', en: 'Source code' },

  /* BLOG */
  'blog.title': { fr: 'Blog', en: 'Blog' },
  'blog.subtitle': {
    fr: 'Apprenez, explorez, codez. Le blog qui vous accompagne',
    en: 'Learn, explore, code. A blog to support your journey',
  },
  'blog.readMore': { fr: 'Lire plus', en: 'Read more' },

  /* CONTACT */
  'contact.title': { fr: 'Contactez-moi', en: 'Get in touch' },
  'contact.lead': {
    fr: 'Un projet, une question ou une collaboration ? Je suis toujours ouvert à de nouvelles opportunités.',
    en: 'A project, a question, or a collaboration? I am always open to new opportunities.',
  },
  'contact.email': { fr: '📧 Envoyer un email', en: '📧 Send an email' },
  'contact.call': { fr: '📞 M’appeler', en: '📞 Call me' },

  /* FOOTER */
  'footer.rights': { fr: 'Tous droits réservés', en: 'All Rights Reserved' },

  /* PROJECT */
  'project.info': { fr: 'Informations', en: 'Information' },
  'project.category': { fr: 'Catégorie', en: 'Category' },
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
  'timeline.title': { fr: 'Parcours', en: 'Experience' },
};
