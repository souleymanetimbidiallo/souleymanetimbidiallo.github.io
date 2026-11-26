import { Component, ChangeDetectionStrategy } from '@angular/core';

import { PROJECTS } from '../../data/projects.data';
import { Project } from '../../models/project.model';
import { LanguageService } from '../../core/i18n/language.service';
import { TranslatePipe } from '../../core/i18n/translate.pipe';
import { FeaturedProjectCardComponent } from '../../shared/featured-project-card/featured-project-card.component';
import { ProjectCardComponent } from '../../shared/project-card/project-card.component';

type CategoryKey = 'all' | 'web' | 'mobile' | 'data';
export const FEATURED_PROJECT_IDS = ['gn-exams-2026', 'api-guinea-geo', 'kaglob-erp', 'yiidein'];
/** Early projects, kept for history in a collapsed section so they don't dilute recent work. */
export const ARCHIVED_PROJECT_IDS = ['gui-plus', 'soodou-shop', 'citoykaidi'];

@Component({
    selector: 'app-portfolio',
    imports: [TranslatePipe, FeaturedProjectCardComponent, ProjectCardComponent],
    templateUrl: './portfolio.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  readonly allProjects = PROJECTS;
  readonly categories: CategoryKey[] = ['all', 'web', 'mobile', 'data'];
  selectedCategory: CategoryKey = 'all';

  constructor(public languageService: LanguageService) {}

  get featuredProjects(): Project[] { return FEATURED_PROJECT_IDS.map((id) => this.allProjects.find((project) => project.id === id)).filter((project): project is Project => Boolean(project)); }
  get displayedProjects(): Project[] {
    const current = this.allProjects.filter((project) => !ARCHIVED_PROJECT_IDS.includes(project.id));
    if (this.selectedCategory !== 'all') return current.filter((project) => project.portfolioFilter === this.selectedCategory);
    return current.filter((project) => !FEATURED_PROJECT_IDS.includes(project.id));
  }
  get archivedProjects(): Project[] { return this.allProjects.filter((project) => ARCHIVED_PROJECT_IDS.includes(project.id)); }
  filterByCategory(category: CategoryKey): void { this.selectedCategory = category; }
  getCategoryLabel(category: CategoryKey): string { return ({ all: { fr:'Tous',en:'All' }, web:{ fr:'Web',en:'Web' }, mobile:{ fr:'Mobile',en:'Mobile' }, data:{ fr:'Données',en:'Data' } }[category])[this.languageService.language()]; }
}
