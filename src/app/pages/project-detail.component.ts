import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';

import { findProjectBySlug, Project } from '../data/projects.data';
import { LocalizedText } from '../models/localized-text.model';
import { GroupedTechnologiesComponent } from '../shared/grouped-technologies/grouped-technologies.component';
import { ProjectStatusComponent } from '../shared/project-status/project-status.component';
import { getEditorialSections } from '../shared/project-content.util';
import { TranslatePipe } from '../core/i18n/translate.pipe';
import { LanguageService } from '../core/i18n/language.service';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [NgFor, NgIf, RouterModule, GroupedTechnologiesComponent, ProjectStatusComponent, TranslatePipe],
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
    this.project = findProjectBySlug(slug);
  }

  get projectTitle(): string {
    if (!this.project) return '';
    return this.project.title[this.languageService.language()];
  }

  get projectDescription(): string {
    if (!this.project) return '';
    const summary = this.project.detailSummary ?? this.project.description;
    return summary[this.languageService.language()];
  }

  get projectRole(): string {
    if (!this.project) return '';
    return this.project.role?.[this.languageService.language()] ?? '';
  }

  get projectImpact(): string {
    if (!this.project) return '';
    return this.project.impact?.[this.languageService.language()] ?? '';
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
    return this.localized(this.project.category);
  }

  localized(value: LocalizedText): string {
    return value[this.languageService.language()];
  }

  get contextKey(): string {
    return this.project ? `project.context.${this.project.context}` : '';
  }

  get projectTypeKey(): string {
    return this.project ? `project.type.${this.project.projectType}` : '';
  }

  get editorialSections(): { labelKey: string; content: string }[] {
    return this.project
      ? getEditorialSections(this.project, this.languageService.language())
      : [];
  }

}
