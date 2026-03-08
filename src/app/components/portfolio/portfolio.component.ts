import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { NgFor, NgIf, NgOptimizedImage } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PROJECTS, Project } from '../../data/projects.data';
import { isPlatformBrowser } from '@angular/common';
import { RevealOnScrollDirective } from '../../shared/reveal-on-scroll.directive';
import { LanguageService } from '../../core/i18n/language.service';
import { TranslatePipe } from '../../core/i18n/translate.pipe';

type Stat = { label: string; end: number; value: number };

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [NgFor, NgIf, RouterModule, NgOptimizedImage, RevealOnScrollDirective, TranslatePipe],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent {
  constructor(@Inject(PLATFORM_ID) private platformId: object, private languageService: LanguageService) {}

  allProjects: Project[] = PROJECTS;
  filteredProjects: Project[] = [...this.allProjects];

  selectedCategory = 'Tous';

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

  get categories(): string[] {
    return this.languageService.language() === 'fr'
      ? ['Tous', 'Application web', 'Mobile', 'Data']
      : ['All', 'Web application', 'Mobile', 'Data'];
  }

  get stats(): Stat[] {
    return this.languageService.language() === 'fr' ? this.statsFr : this.statsEn;
  }

  private animated = false;

  filterByCategory(category: string) {
    this.selectedCategory = category;
    const frCategory = this.toFrenchCategory(category);
    this.filteredProjects = frCategory === 'Tous' ? this.allProjects : this.allProjects.filter((p) => p.category === frCategory);
  }

  private toFrenchCategory(category: string): string {
    if (category === 'All') return 'Tous';
    if (category === 'Web application') return 'Application web';
    return category;
  }

  onCountersVisible(el: HTMLElement) {
    if (this.animated || !isPlatformBrowser(this.platformId)) return;
    const io = new IntersectionObserver((entries) => {
      if (entries.some(e => e.isIntersecting)) {
        this.animated = true;
        const dur = 1000;
        const start = performance.now();
        const from = this.stats.map(s => s.value);

        const tick = (t: number) => {
          const k = Math.min(1, (t - start) / dur);
          const target = this.stats;
          const next = target.map((s, i) => ({ ...s, value: Math.floor(from[i] + k * (s.end - from[i])) }));
          if (this.languageService.language() === 'fr') this.statsFr.splice(0, this.statsFr.length, ...next);
          else this.statsEn.splice(0, this.statsEn.length, ...next);
          if (k < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        io.disconnect();
      }
    }, { threshold: 0.2 });
    io.observe(el);
  }
}
