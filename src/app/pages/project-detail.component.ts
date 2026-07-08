import { Component, effect } from '@angular/core';
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
export class ProjectDetailComponent {
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

  get projectRole(): string {
    if (!this.project) return '';
    return this.project.role[this.languageService.language()];
  }

  get projectImpact(): string {
    if (!this.project) return '';
    return this.project.impact[this.languageService.language()];
  }

  get projectHighlights(): string[] {
    if (!this.project) return [];
    const lang = this.languageService.language();
    return this.project.highlights.map((highlight) => highlight[lang]);
  }

  get projectCaseStudy(): { title: string; items: string[] }[] {
    if (!this.project?.caseStudy) return [];
    const lang = this.languageService.language();

    return this.project.caseStudy.map((section) => ({
      title: section.title[lang],
      items: section.items.map((item) => item[lang]),
    }));
  }

  get projectProofBlocks(): { title: string; variant: string; lines: string[] }[] {
    if (!this.project?.proofBlocks) return [];
    const lang = this.languageService.language();

    return this.project.proofBlocks.map((block) => ({
      title: block.title[lang],
      variant: block.variant,
      lines: block.lines.map((line) => line[lang]),
    }));
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

}
