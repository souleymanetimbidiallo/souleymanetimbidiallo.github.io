import { ProfessionalExperience } from '../models/experience.model';

export const PROFESSIONAL_EXPERIENCES: ProfessionalExperience[] = [
  {
    id: 'inetum',
    company: 'Inetum',
    role: { fr: 'Ingénieur logiciel full-stack', en: 'Full-Stack Software Engineer' },
    location: { fr: 'France', en: 'France' },
    startDate: { fr: 'Sept. 2023', en: 'Sep. 2023' },
    endDate: { fr: 'Aujourd’hui', en: 'Present' },
    summary: {
      fr: 'Développement et maintenance d’applications au sein de la plateforme PHENIX.',
      en: 'Application development and maintenance within the PHENIX platform.',
    },
    companyImage: 'assets/img/inetum.png',
    engagements: [
      {
        id: 'phenix',
        projectName: 'PHENIX',
        displayTitle: {
          fr: 'Plateforme nationale française de gestion des infractions routières',
          en: 'French National Traffic Violation Management Platform',
        },
        internalProjectName: 'PHENIX',
        context: {
          fr: 'Plateforme nationale française de gestion des infractions routières.',
          en: 'French national traffic-violation management platform.',
        },
        description: {
          fr: 'Contribution au développement et à la maintenance de la plateforme.',
          en: 'Contributions to platform development and maintenance.',
        },
        technologies: [
          'java',
          'spring',
          'angular',
          'oracle',
          'mariadb',
          'elasticsearch',
          'docker',
          'gitlab-ci-cd',
        ],
        responsibilities: [
          {
            fr: 'Contribution au développement backend et frontend d’une plateforme nationale de gestion des infractions routières.',
            en: 'Contributed to backend and frontend development for a national traffic-violation management platform.',
          },
          {
            fr: 'Développement et maintenance de fonctionnalités applicatives basées sur des API REST.',
            en: 'Developed and maintained REST-based application features.',
          },
          {
            fr: 'Analyse des anomalies et réalisation de maintenance corrective.',
            en: 'Investigated defects and delivered corrective maintenance.',
          },
          {
            fr: 'Travail avec des bases de données relationnelles et Elasticsearch.',
            en: 'Worked with relational databases and Elasticsearch.',
          },
          {
            fr: 'Collaboration au sein d’une équipe Agile Scrum.',
            en: 'Collaborated within an Agile Scrum team.',
          },
        ],
        confidentiality: 'confidential',
      },
    ],
  },
  {
    id: 'capgemini',
    company: 'Capgemini',
    role: { fr: 'Ingénieur logiciel full-stack', en: 'Full-Stack Software Engineer' },
    location: { fr: 'Nantes, France', en: 'Nantes, France' },
    startDate: { fr: 'Avr. 2021', en: 'Apr. 2021' },
    endDate: { fr: 'Août 2023', en: 'Aug. 2023' },
    summary: {
      fr: 'Contributions à quatre projets d’entreprise aux écosystèmes techniques distincts.',
      en: 'Contributions to four enterprise projects with distinct technology ecosystems.',
    },
    companyImage: 'assets/img/capgemini.png',
    engagements: [
      {
        id: 'staffing-cgn',
        projectName: 'StaffingCGN',
        displayTitle: {
          fr: 'Application d’entreprise de gestion du staffing et des ressources',
          en: 'Enterprise Staffing and Workforce Management Application',
        },
        context: {
          fr: 'Application d’entreprise consacrée à la gestion du staffing et des ressources.',
          en: 'Enterprise application for staffing and workforce management.',
        },
        description: {
          fr: 'Contribution à une application d’entreprise utilisant Java, Spring Boot et Angular.',
          en: 'Contributed to an enterprise application using Java, Spring Boot, and Angular.',
        },
        technologies: ['java', 'spring-boot', 'angular'],
        responsibilities: [],
        confidentiality: 'limited',
      },
      {
        id: 'les-bons-clics',
        projectName: 'Les Bons Clics',
        displayTitle: {
          fr: 'Plateforme web d’inclusion numérique',
          en: 'Digital Inclusion Web Platform',
        },
        context: {
          fr: 'Plateforme d’inclusion numérique et projet d’entreprise.',
          en: 'Digital inclusion platform and enterprise project.',
        },
        description: {
          fr: 'Projet de plateforme consacré à l’inclusion numérique.',
          en: 'Platform project focused on digital inclusion.',
        },
        technologies: ['php', 'symfony', 'twig'],
        responsibilities: [],
        confidentiality: 'limited',
        domain: { fr: 'Inclusion numérique', en: 'Digital inclusion' },
      },
      {
        id: 'dpgt',
        projectName: 'DPGT',
        displayTitle: {
          fr: 'Plateforme de contenu d’entreprise basée sur Drupal',
          en: 'Drupal-Based Enterprise Content Platform',
        },
        context: {
          fr: 'Projet CMS d’entreprise basé sur Drupal.',
          en: 'Enterprise CMS project based on Drupal.',
        },
        description: {
          fr: 'Projet Drupal 9 utilisant des composants Symfony dans son écosystème technique.',
          en: 'Drupal 9 project using Symfony Components within its technical ecosystem.',
        },
        technologies: ['drupal-9', 'php', 'symfony-components'],
        responsibilities: [],
        confidentiality: 'limited',
      },
      {
        id: 'die-immosonnic',
        projectName: 'DIE / Immosonnic',
        displayTitle: {
          fr: 'Applications web d’entreprise liées au secteur immobilier',
          en: 'Enterprise and Real-Estate-Related Web Applications',
        },
        context: {
          fr: 'Application d’entreprise liée à l’immobilier.',
          en: 'Enterprise real-estate-related application.',
        },
        description: {
          fr: 'Projet d’entreprise dans le domaine immobilier.',
          en: 'Enterprise project in the real-estate domain.',
        },
        technologies: ['php', 'symfony', 'drupal'],
        responsibilities: [],
        confidentiality: 'limited',
        domain: { fr: 'Immobilier', en: 'Real estate' },
      },
    ],
  },
];
