import { Component, Input } from '@angular/core';
import { NgFor, NgIf, NgOptimizedImage } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Project } from '../../models/project.model';
import { getTechnologyLabel } from '../../data/technologies.data';
import { LanguageService } from '../../core/i18n/language.service';
import { TranslatePipe } from '../../core/i18n/translate.pipe';
import { ProjectStatusComponent } from '../project-status/project-status.component';

@Component({ selector: 'app-featured-project-card', standalone: true, imports: [NgFor, NgIf, NgOptimizedImage, RouterModule, TranslatePipe, ProjectStatusComponent], templateUrl: './featured-project-card.component.html', styleUrl: './featured-project-card.component.css' })
export class FeaturedProjectCardComponent {
  @Input({ required: true }) project!: Project;
  constructor(public languageService: LanguageService) {}
  get title(): string { return this.project.title[this.languageService.language()]; }
  get summary(): string { return (this.project.cardSummary ?? this.project.description)[this.languageService.language()]; }
  get role(): string { return this.project.role?.[this.languageService.language()] ?? ''; }
  get visibleTechnologies(): string[] { return this.project.currentTechnologies.slice(0, 5); }
  get remainingTechnologyCount(): number { return Math.max(0, this.project.currentTechnologies.length - 5); }
  get selectedCapabilities(): string[] {
    const items = this.project.capabilityGroups?.flatMap((group) => group.items) ?? this.project.capabilities;
    return items.slice(0, 3).map((item) => item[this.languageService.language()]);
  }
  technologyLabel(id: string): string { return getTechnologyLabel(id); }
}
