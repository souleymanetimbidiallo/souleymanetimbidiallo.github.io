import { Component } from '@angular/core';
import { NgClass, NgFor } from '@angular/common';
import { LanguageService } from '../../core/i18n/language.service';
import { TranslatePipe } from '../../core/i18n/translate.pipe';

type Service = {
  icon: string;
  title: string;
  desc: string;
  bullets: string[];
  tags: string[];
};

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [NgFor, NgClass, TranslatePipe],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  constructor(private languageService: LanguageService) {}

  private readonly servicesFr: Service[] = [
    { icon: 'bi-window-sidebar', title: 'Développement Web', desc: 'Apps rapides, accessibles et scalables.', bullets: ['Angular / Spring Boot / Node', 'Design system & performance', 'SEO / Accessibilité / PWA'], tags: ['Angular','Spring','Node','REST','PWA'] },
    { icon: 'bi-phone', title: 'Développement Mobile', desc: 'Apps mobiles intuitives et fiables.', bullets: ['Flutter multi-plateformes', 'Intégration API & auth', 'CI/CD & tests'], tags: ['Flutter','Android','iOS','Auth','CI/CD'] },
    { icon: 'bi-bar-chart', title: 'Data & IA', desc: 'Décisions pilotées par la donnée.', bullets: ['ETL & analyses', 'Protos ML légers', 'Dashboards'], tags: ['Python','Pandas','SQL','Notebook','Charts'] },
  ];

  private readonly servicesEn: Service[] = [
    { icon: 'bi-window-sidebar', title: 'Web Development', desc: 'Fast, accessible and scalable apps.', bullets: ['Angular / Spring Boot / Node', 'Design system & performance', 'SEO / Accessibility / PWA'], tags: ['Angular','Spring','Node','REST','PWA'] },
    { icon: 'bi-phone', title: 'Mobile Development', desc: 'Intuitive and reliable mobile apps.', bullets: ['Cross-platform Flutter apps', 'API integration & auth', 'CI/CD & tests'], tags: ['Flutter','Android','iOS','Auth','CI/CD'] },
    { icon: 'bi-bar-chart', title: 'Data & AI', desc: 'Data-driven decisions.', bullets: ['ETL & analytics', 'Lightweight ML prototypes', 'Dashboards'], tags: ['Python','Pandas','SQL','Notebook','Charts'] },
  ];

  get services(): Service[] {
    return this.languageService.language() === 'fr' ? this.servicesFr : this.servicesEn;
  }
}
