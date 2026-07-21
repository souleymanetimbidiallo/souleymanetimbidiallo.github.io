import { Education } from '../models/education.model';

export const EDUCATION: Education[] = [
  {
    id: 'universite-rennes-miage',
    institution: { fr: 'Université de Rennes', en: 'University of Rennes' },
    degree: {
      fr: 'Étudiant (Licence + Master MIAGE)',
      en: 'Student (Bachelor + Master MIAGE)',
    },
    location: { fr: 'Rennes, France', en: 'Rennes, France' },
    startDate: '2019',
    endDate: '2023',
    description: {
      fr: 'Génie logiciel, projets data & web, mentions Bien.',
      en: 'Software engineering, data & web projects.',
    },
    image: 'assets/img/univ-rennes.png',
  },
];
