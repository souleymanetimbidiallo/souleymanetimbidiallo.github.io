import { Component } from '@angular/core';
import { NgClass, NgFor } from '@angular/common';

type Service = {
  icon: string;        // classe bootstrap icon
  title: string;
  desc: string;        // petite phrase d’accroche
  bullets: string[];   // 3 points clés
  tags: string[];      // stack / livrables
};

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [NgFor, NgClass],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  services: Service[] = [
    {
      icon: 'bi-window-sidebar',
      title: 'Développement Web',
      desc: 'Apps rapides, accessibles et scalables.',
      bullets: [
        'Angular / Spring Boot / Node',
        'Design system & performance',
        'SEO / Accessibilité / PWA'
      ],
      tags: ['Angular','Spring','Node','REST','PWA']
    },
    {
      icon: 'bi-phone',
      title: 'Développement Mobile',
      desc: 'Apps mobiles intuitives et fiables.',
      bullets: [
        'Flutter multi-plateformes',
        'Intégration API & auth',
        'CI/CD & tests'
      ],
      tags: ['Flutter','Android','iOS','Auth','CI/CD']
    },
    {
      icon: 'bi-bar-chart',
      title: 'Data & IA',
      desc: 'Décisions pilotées par la donnée.',
      bullets: [
        'ETL & analyses',
        'Protos ML légers',
        'Dashboards'
      ],
      tags: ['Python','Pandas','SQL','Notebook','Charts']
    },
    {
      icon: 'bi-binoculars',
      title: 'Identité visuelle',
      desc: 'Une image de marque cohérente.',
      bullets: [
        'Logo & couleurs',
        'Guidelines rapides',
        'Maquettes web'
      ],
      tags: ['Logo','Palette','UI kit','Figma']
    },
    {
      icon: 'bi-info-circle',
      title: 'Consulting Tech',
      desc: 'Découpage, choix techno, roadmap.',
      bullets: [
        'Audit architecture',
        'Coaching dev',
        'Plan d’action'
      ],
      tags: ['Audit','Roadmap','Best practices']
    },
    {
      icon: 'bi-people',
      title: 'Collaboration personnalisée',
      desc: 'Mode mission ou au forfait.',
      bullets: [
        'Spécifications claires',
        'Sprints courts',
        'Suivi & livrables'
      ],
      tags: ['Agile','Jira','Notion','Git']
    }
  ];
}
