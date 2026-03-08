import { Component } from '@angular/core';
import { NgClass, NgFor } from '@angular/common';
import { LanguageService } from '../../core/i18n/language.service';
import { TranslatePipe } from '../../core/i18n/translate.pipe';

type Step = { icon: string; title: string; desc: string; };

@Component({
  selector: 'app-process',
  standalone: true,
  imports: [NgFor, NgClass, TranslatePipe],
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.css']
})
export class ProcessComponent {
  constructor(private languageService: LanguageService) {}

  private readonly stepsFr: Step[] = [
    { icon: 'bi-search', title: 'Découverte', desc: 'Objectifs, périmètre, utilisateurs, KPI.' },
    { icon: 'bi-pencil', title: 'Design', desc: 'Maquettes, UI kit, specs techniques.' },
    { icon: 'bi-code-slash', title: 'Développement', desc: 'Sprints courts, CI/CD, revues de code.' },
    { icon: 'bi-rocket', title: 'Livraison', desc: 'Mise en prod, suivi, itérations.' },
  ];

  private readonly stepsEn: Step[] = [
    { icon: 'bi-search', title: 'Discovery', desc: 'Goals, scope, users, KPIs.' },
    { icon: 'bi-pencil', title: 'Design', desc: 'Mockups, UI kit, technical specs.' },
    { icon: 'bi-code-slash', title: 'Development', desc: 'Short sprints, CI/CD, code reviews.' },
    { icon: 'bi-rocket', title: 'Delivery', desc: 'Production release, monitoring, iterations.' },
  ];

  get steps(): Step[] {
    return this.languageService.language() === 'fr' ? this.stepsFr : this.stepsEn;
  }
}
