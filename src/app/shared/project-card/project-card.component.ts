import { Component, Input } from '@angular/core';
import { NgFor, NgIf, NgOptimizedImage } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Project } from '../../models/project.model';
import { getTechnologyLabel } from '../../data/technologies.data';
import { LanguageService } from '../../core/i18n/language.service';
import { TranslatePipe } from '../../core/i18n/translate.pipe';
import { ProjectStatusComponent } from '../project-status/project-status.component';

@Component({ selector: 'app-project-card', standalone: true, imports: [NgFor, NgIf, NgOptimizedImage, RouterModule, TranslatePipe, ProjectStatusComponent], templateUrl: './project-card.component.html', styleUrl: './project-card.component.css' })
export class ProjectCardComponent {
  @Input({ required: true }) project!: Project;
  constructor(public languageService: LanguageService) {}
  get title(): string { return this.project.title[this.languageService.language()]; }
  get summary(): string { return (this.project.cardSummary ?? this.project.description)[this.languageService.language()]; }
  get technologies(): string[] { return this.project.currentTechnologies.slice(0, 4); }
  technologyLabel(id: string): string { return getTechnologyLabel(id); }
}
