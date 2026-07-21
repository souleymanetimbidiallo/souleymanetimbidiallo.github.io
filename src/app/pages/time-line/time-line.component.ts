import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { PROFESSIONAL_EXPERIENCES } from '../../data/experience.data';
import { EDUCATION } from '../../data/education.data';
import { LocalizedText } from '../../models/localized-text.model';
import { RevealOnScrollDirective } from '../../shared/reveal-on-scroll.directive';
import { GroupedTechnologiesComponent } from '../../shared/grouped-technologies/grouped-technologies.component';
import { LanguageService } from '../../core/i18n/language.service';
import { TranslatePipe } from '../../core/i18n/translate.pipe';

@Component({
  selector: 'app-time-line',
  standalone: true,
  imports: [NgFor, NgIf, RevealOnScrollDirective, GroupedTechnologiesComponent, TranslatePipe],
  templateUrl: './time-line.component.html',
  styleUrl: './time-line.component.css',
})
export class TimeLineComponent {
  readonly experiences = PROFESSIONAL_EXPERIENCES;
  readonly education = EDUCATION;

  constructor(public languageService: LanguageService) {}

  localized(value: LocalizedText): string {
    return value[this.languageService.language()];
  }
}
