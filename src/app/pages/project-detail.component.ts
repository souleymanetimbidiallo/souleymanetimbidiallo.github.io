import { Component, AfterViewInit, effect } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';

import { PROJECTS, Project, ProjectCategory } from '../data/projects.data';
import { TranslatePipe } from '../core/i18n/translate.pipe';
import { LanguageService } from '../core/i18n/language.service';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [NgFor, NgIf, RouterModule, TranslatePipe],
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css'],
})
export class ProjectDetailComponent implements AfterViewInit {
  project?: Project;

  constructor(
    private route: ActivatedRoute,
    public languageService: LanguageService
  ) {
    const slug = this.route.snapshot.paramMap.get('slug');
    this.project = PROJECTS.find((p) => p.slug === slug);

    effect(() => {
      this.languageService.language();
    });
  }

  get projectTitle(): string {
    if (!this.project) return '';
    return this.project.title[this.languageService.language()];
  }

  get projectDescription(): string {
    if (!this.project) return '';
    return this.project.description[this.languageService.language()];
  }

  get projectCategoryLabel(): string {
    if (!this.project) return '';

    const labels: Record<ProjectCategory, { fr: string; en: string }> = {
      web: { fr: 'Application web', en: 'Web application' },
      mobile: { fr: 'Mobile', en: 'Mobile' },
      data: { fr: 'Data', en: 'Data' },
    };

    return labels[this.project.category][this.languageService.language()];
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      if (window.initPortfolioSwiper) {
        window.initPortfolioSwiper();
      }
    }, 0);
  }
}

declare global {
  interface Window {
    initPortfolioSwiper: () => void;
  }
}