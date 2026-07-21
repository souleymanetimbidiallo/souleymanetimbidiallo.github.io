import { Component, effect } from '@angular/core';
import { NgFor, NgIf, NgOptimizedImage } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

import { PROJECTS, Project, ProjectCategory } from '../../data/projects.data';
import { getTechnologyLabel } from '../../data/technologies.data';
import { LocalizedText } from '../../models/localized-text.model';
import { RevealOnScrollDirective } from '../../shared/reveal-on-scroll.directive';
import { LanguageService } from '../../core/i18n/language.service';
import { TranslatePipe } from '../../core/i18n/translate.pipe';
import { ProjectStatusComponent } from '../../shared/project-status/project-status.component';

type ProofPoint = { icon: string; label: { fr: string; en: string }; detail: { fr: string; en: string } };
type CategoryKey = 'all' | 'web' | 'mobile' | 'data';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    RouterModule,
    NgOptimizedImage,
    RevealOnScrollDirective,
    ProjectStatusComponent,
    TranslatePipe,
  ],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent {
  constructor(
    public languageService: LanguageService,
    private router: Router
  ) {
    effect(() => {
      this.languageService.language();
      this.applyFilter();
    });
  }

  allProjects: Project[] = [...PROJECTS].sort(
    (a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured))
  );
  filteredProjects: Project[] = [...this.allProjects];
  featuredProjects: Project[] = this.allProjects.filter((project) => project.featured);

  selectedCategory: CategoryKey = 'all';
  readonly categories: CategoryKey[] = ['all', 'web', 'mobile', 'data'];

  readonly proofPoints: ProofPoint[] = [
    {
      icon: 'bi-layers',
      label: { fr: 'Full-stack', en: 'Full-stack' },
      detail: { fr: 'Angular, Java, Node.js', en: 'Angular, Java, Node.js' },
    },
    {
      icon: 'bi-braces',
      label: { fr: 'API & backend', en: 'API & backend' },
      detail: { fr: 'REST, données, intégrations', en: 'REST, data, integrations' },
    },
    {
      icon: 'bi-bar-chart',
      label: { fr: 'Data', en: 'Data' },
      detail: { fr: 'Python, nettoyage, visualisation', en: 'Python, cleaning, visualization' },
    },
    {
      icon: 'bi-geo-alt',
      label: { fr: 'Remote-ready', en: 'Remote-ready' },
      detail: { fr: 'Collaboration internationale', en: 'International collaboration' },
    },
  ];

  filterByCategory(category: CategoryKey): void {
    this.selectedCategory = category;
    this.applyFilter();
  }

  goToProject(slug: string): void {
    this.router.navigate(['/projets', slug]);
  }

  private applyFilter(): void {
    if (this.selectedCategory === 'all') {
      this.filteredProjects = [...this.allProjects];
      return;
    }

    this.filteredProjects = this.allProjects.filter(
      (project) => this.getProjectCategoryKey(project.portfolioFilter) === this.selectedCategory
    );
  }

  private getProjectCategoryKey(category: ProjectCategory): CategoryKey {
    switch (category) {
      case 'web':
        return 'web';
      case 'mobile':
        return 'mobile';
      case 'data':
        return 'data';
      default:
        return 'all';
    }
  }

  getCategoryLabel(category: CategoryKey): string {
    const lang = this.languageService.language();

    const labels: Record<CategoryKey, { fr: string; en: string }> = {
      all: { fr: 'Tous', en: 'All' },
      web: { fr: 'Application web', en: 'Web application' },
      mobile: { fr: 'Mobile', en: 'Mobile' },
      data: { fr: 'Data', en: 'Data' },
    };

    return labels[category][lang];
  }

  getProjectCategoryLabel(category: ProjectCategory): string {
    return this.getCategoryLabel(this.getProjectCategoryKey(category));
  }

  localized(value: LocalizedText): string {
    return value[this.languageService.language()];
  }

  getTechnologyLabel(id: string): string {
    return getTechnologyLabel(id);
  }

  getStatusLabel(project: Project): string {
    return `project.status.${project.status}`;
  }

  getProjectTitle(project: Project): string {
    return project.title[this.languageService.language()];
  }

  getProjectDescription(project: Project): string {
    const summary = project.cardSummary ?? project.description;
    return summary[this.languageService.language()];
  }

  getProjectImpact(project: Project): string {
    return project.impact?.[this.languageService.language()] ?? '';
  }

  getProjectRole(project: Project): string {
    return project.role?.[this.languageService.language()] ?? '';
  }
}
