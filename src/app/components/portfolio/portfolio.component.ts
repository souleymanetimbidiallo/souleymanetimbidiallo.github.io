import { Component, Inject, PLATFORM_ID, effect } from '@angular/core';
import { NgFor, NgIf, NgOptimizedImage, isPlatformBrowser } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

import { PROJECTS, Project, ProjectCategory } from '../../data/projects.data';
import { RevealOnScrollDirective } from '../../shared/reveal-on-scroll.directive';
import { LanguageService } from '../../core/i18n/language.service';
import { TranslatePipe } from '../../core/i18n/translate.pipe';

type Stat = { label: string; end: number; value: number };
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
    TranslatePipe,
  ],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent {
  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    public languageService: LanguageService,
    private router: Router
  ) {
    effect(() => {
      this.languageService.language();
      this.applyFilter();
    });
  }

  allProjects: Project[] = PROJECTS;
  filteredProjects: Project[] = [...this.allProjects];

  selectedCategory: CategoryKey = 'all';
  readonly categories: CategoryKey[] = ['all', 'web', 'mobile', 'data'];

  private readonly statsFr: Stat[] = [
    { label: 'TRAVAUX FINIS', end: 15, value: 10 },
    { label: 'ANNÉES D’EXPÉRIENCE', end: 7, value: 4 },
    { label: 'CLIENTS', end: 10, value: 5 },
    { label: 'CERTIFICATIONS', end: 5, value: 5 },
  ];

  private readonly statsEn: Stat[] = [
    { label: 'COMPLETED WORK', end: 15, value: 10 },
    { label: 'YEARS OF EXPERIENCE', end: 7, value: 4 },
    { label: 'CLIENTS', end: 10, value: 5 },
    { label: 'CERTIFICATIONS', end: 5, value: 5 },
  ];

  private animated = false;

  get stats(): Stat[] {
    return this.languageService.language() === 'fr' ? this.statsFr : this.statsEn;
  }

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
      (project) => this.getProjectCategoryKey(project.category) === this.selectedCategory
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

  getProjectTitle(project: Project): string {
    return project.title[this.languageService.language()];
  }

  getProjectDescription(project: Project): string {
    return project.description[this.languageService.language()];
  }

  onCountersVisible(el: HTMLElement): void {
    if (this.animated || !isPlatformBrowser(this.platformId)) return;

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          this.animated = true;

          const dur = 1000;
          const start = performance.now();
          const from = this.stats.map((s) => s.value);

          const tick = (t: number) => {
            const k = Math.min(1, (t - start) / dur);
            const target = this.stats;

            const next = target.map((s, i) => ({
              ...s,
              value: Math.floor(from[i] + k * (s.end - from[i])),
            }));

            if (this.languageService.language() === 'fr') {
              this.statsFr.splice(0, this.statsFr.length, ...next);
            } else {
              this.statsEn.splice(0, this.statsEn.length, ...next);
            }

            if (k < 1) {
              requestAnimationFrame(tick);
            }
          };

          requestAnimationFrame(tick);
          io.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    io.observe(el);
  }
}