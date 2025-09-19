import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { NgFor, NgIf, NgOptimizedImage } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PROJECTS, Project } from '../../data/projects.data';
import { isPlatformBrowser } from '@angular/common';
import { RevealOnScrollDirective } from '../../shared/reveal-on-scroll.directive';

type Stat = { label: string; end: number; value: number };

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [NgFor, NgIf, RouterModule, NgOptimizedImage, RevealOnScrollDirective],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent {
  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  allProjects: Project[] = PROJECTS;
  filteredProjects: Project[] = [...this.allProjects];

  categories = ['Tous', 'Application web', 'Mobile', 'Data'];
  selectedCategory = 'Tous';

  stats: Stat[] = [
    { label: 'TRAVAUX FINIS', end: 15, value: 10 },
    { label: 'ANNÉES D’EXPÉRIENCE', end: 7, value: 4 },
    { label: 'CLIENTS', end: 10, value: 5 },
    { label: 'CERTIFICATIONS', end: 5, value: 5 },
  ];

  private animated = false;

  filterByCategory(category: string) {
    this.selectedCategory = category;
    this.filteredProjects =
      category === 'Tous'
        ? this.allProjects
        : this.allProjects.filter((p) => p.category === category);
  }

  // Compte les stats en montant lorsqu’on voit la section
  onCountersVisible(el: HTMLElement) {
    if (this.animated || !isPlatformBrowser(this.platformId)) return;
    const io = new IntersectionObserver((entries) => {
      if (entries.some(e => e.isIntersecting)) {
        this.animated = true;
        const dur = 1000; // ms
        const start = performance.now();
        const from = this.stats.map(s => s.value);

        const tick = (t: number) => {
          const k = Math.min(1, (t - start) / dur);
          this.stats = this.stats.map((s, i) => ({
            ...s,
            value: Math.floor(from[i] + k * (s.end - from[i])),
          }));
          if (k < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        io.disconnect();
      }
    }, { threshold: 0.2 });
    io.observe(el);
  }
}
