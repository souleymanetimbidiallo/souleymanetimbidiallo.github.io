import { Component } from '@angular/core';
import { TranslatePipe } from '../../core/i18n/translate.pipe';
import { LanguageService } from '../../core/i18n/language.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  constructor(public languageService: LanguageService) {}
  get resumeUrl(): string { return this.languageService.language() === 'fr' ? 'assets/pdf/cv-souleymane-diallo-fr.pdf' : 'assets/pdf/resume-souleymane-diallo-en.pdf'; }
}
