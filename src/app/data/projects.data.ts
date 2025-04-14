// src/app/data/projects.data.ts
export interface Project {
    slug: string; 
    title: string;
    image: string;
    client: string;
    description: string;
    date: string;
    category: string;
    url: string;
    images: string[];
  }
  
  export const PROJECTS: Project[] = [
    {
      slug: 'gui-plus',
      title: 'Gui-Plus',
      image: 'assets/img/projects/guiplus224.jpg',
      date: '19/04/2019',
      category: 'Application web',
      client: 'Gui-Plus Group',
      url: 'https://guiplusgroup.com',
      description: `
        Guiplus Group SARL, fondée le 1er avril 2019, est l’histoire de deux frères Maladho et Souleymane passionnés par les TIC.
        Leur but est de venir en aide à la jeunesse guinéenne grâce aux nouvelles technologies.
      `,
      images: [
        'assets/img/projects/guiplus/guiplus1.png',
        'assets/img/projects/guiplus/guiplus2.png',
        'assets/img/projects/guiplus/guiplus3.png'
      ]
    },
    {
      slug: 'gestion-demo',
      title: 'Gestion Démographie',
      image: 'assets/img/projects/gestion-demo.jpg',
      date: '18 Sep. 2018',
      category: 'Application web',
      client: 'Gouvernement .gn',
      url: 'https://github.com/souleymanetimbidiallo/gestion-demo',
      description: `
        Notre projet vise à révolutionner l'accès aux services administratifs en Guinée en introduisant une plateforme de numérisation des documents.*
        En un clic, les citoyens peuvent numériser leurs documents administratifs, simplifiant ainsi la prise de rendez-vous et l'accès à des services essentiels.
        Avec une interface conviviale et sécurisée, notre solution intègre des technologies de pointe, telles que la reconnaissance optique de caractères (OCR), garantissant l'efficacité et la précision.
      `,
      images: [
        'assets/img/projects/gestion-demo.jpg'
      ]
    },
    {
      slug: 'soodou-shop',
      title: 'Soodou Shop',
      image: 'assets/img/projects/soodou-shop.png',
      date: '05/05/2020',
      category: 'Application web',
      client: 'Soodou Shop',
      url: 'https://github.com/souleymanetimbidiallo/soodou-shop',
      description: `
        Ce projet consiste à l\'étude, la conception et la réalisation d\'un site de commerce électronique.
        Nous souhaitons gérer un ensemble de produits high-tech commandés par des clients.
        Rendez-vous Soodou-Shop pour achetez vos produits high-tech !
      `,
      images: [
        'assets/img/projects/soodou-shop.png'
      ]
    },
    {
      slug: 'ag35-website',
      title: 'Association Guinéenne D\'Ille ET Vilaine (AG35)',
      image: 'assets/img/projects/ag35.png',
      date: '19/04/2023',
      category: 'Application web',
      client: 'AG 35',
      url: 'https://github.com/souleymanetimbidiallo/ag35_website',
      description: `
        Créée depuis 2007, l'AG35 a pour but de : Créer, favoriser et consolider les liens de fraternité, de solidarité et d'entraide entre les guinéen(ne)s.

        Porter, accompagner et soutenir le développement et l'intégraon socio-professionnels et culturels des guinéen(ne)s en Ille-et-Vilaine.
        Promouvoir, encourager et communiquer sur les initiatives et les acvités de ses membres et de ses partenaires et les aider dans la réalisaon de leurs projets.
      `,
      images: [
        'assets/img/projects/ag35.png',
        'assets/img/projects/ag35/ag35_2.png'
      ]
    },
    {
      slug: 'guinea-roads',
      title: 'Guinea-Roads',
      image: 'assets/img/projects/guinea-roads.png',
      date: '08/04/2024',
      category: 'Mobile',
      client: 'Guinea-Roads',
      url: '',
      description: `
        L\'application mobile de transport est conçue pour aider les utilisateurs à trouver des itinéraires de transport en ville.
        Elle propose des fonctionnalités telles que la géolocalisation, des suggestions de lieux à proximité, des itinéraires accessibles aux personnes à mobilité réduite, la navigation vocale, la planification de voyages, les horaires de transport en temps réel, l'intégration de covoiturage, l'assistance en cas d'urgence et les commentaires des utilisateurs. 

        `,
      images: [
        'assets/img/projects/guinea-roads/guinea-roads.png',
        'assets/img/projects/guinea-roads/demo2.png'
      ]
    },
    {
      slug: 'examens-gn',
      title: 'Examens nationaux GN 2023',
      image: 'assets/img/projects/examens_gn.jpeg',
      date: '18 Sep. 2023',
      category: 'Data',
      client: 'Gui-Plus Group',
      url: 'https://guiplusgroup.com',
      description: `
        Analyse de données sur les différents résultats des examens nationaux de la Guinée 2023.
        Utilisation de Python, avec les bibliothèques. 
      `,
      images: [
        'assets/img/projects/examens-gn-2023/Capture.PNG',
        'assets/img/projects/examens-gn-2023/demo2.PNG'
      ]
    },
    {
      slug: 'api-guinea-geo',
      title: 'API Guinée Geo',
      image: 'assets/img/projects/api-guinea-geo.png',
      date: '10 Avr. 2024',
      category: 'Data',
      client: 'Gui-Plus Group',
      url: 'https://api-guinea-geo.vercel.app/',
      description: `
        Les données géographiques de la Guinée en accès libre.
      `,
      images: [
        'assets/img/projects/api-guinea-geo.png',
      ]
    },
    // Ajoute les autres projets ici...
  ];
  