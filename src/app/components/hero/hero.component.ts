import { Component } from '@angular/core';
import { TranslatePipe } from '../../core/i18n/translate.pipe';
import { LanguageService } from '../../core/i18n/language.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  constructor(public languageService: LanguageService) {}

  get cvUrl(): string {
    return this.languageService.language() === 'fr'
      ? 'assets/pdf/cv-souleymane-diallo-fr.pdf'
      : 'assets/pdf/resume-souleymane-diallo-en.pdf';
  }

  get cvDownloadName(): string {
    return this.languageService.language() === 'fr'
      ? 'CV-Souleymane-Diallo-FR.pdf'
      : 'Resume-Souleymane-Diallo-EN.pdf';
  }

}
