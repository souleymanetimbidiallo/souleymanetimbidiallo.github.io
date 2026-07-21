import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { PROJECTS } from '../../data/projects.data';
import { Project } from '../../models/project.model';
import { LanguageService } from '../../core/i18n/language.service';
import { TranslatePipe } from '../../core/i18n/translate.pipe';
import { FeaturedProjectCardComponent } from '../../shared/featured-project-card/featured-project-card.component';
import { ProjectCardComponent } from '../../shared/project-card/project-card.component';

type CategoryKey = 'all' | 'web' | 'mobile' | 'data';
export const FEATURED_PROJECT_IDS = ['kaglob-erp', 'yiidein', 'cee-2026', 'citoykaidi'];

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [NgFor, NgIf, TranslatePipe, FeaturedProjectCardComponent, ProjectCardComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent {
  readonly allProjects = PROJECTS;
  readonly categories: CategoryKey[] = ['all', 'web', 'mobile', 'data'];
  selectedCategory: CategoryKey = 'all';

  constructor(public languageService: LanguageService) {}

  get featuredProjects(): Project[] { return FEATURED_PROJECT_IDS.map((id) => this.allProjects.find((project) => project.id === id)).filter((project): project is Project => Boolean(project)); }
  get displayedProjects(): Project[] {
    if (this.selectedCategory !== 'all') return this.allProjects.filter((project) => project.portfolioFilter === this.selectedCategory);
    return this.allProjects.filter((project) => !FEATURED_PROJECT_IDS.includes(project.id));
  }
  filterByCategory(category: CategoryKey): void { this.selectedCategory = category; }
  getCategoryLabel(category: CategoryKey): string { return ({ all: { fr:'Tous',en:'All' }, web:{ fr:'Web',en:'Web' }, mobile:{ fr:'Mobile',en:'Mobile' }, data:{ fr:'Données',en:'Data' } }[category])[this.languageService.language()]; }
}
