import { Component, effect, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';

import { ImageViewerComponent } from '../shared/image-viewer/image-viewer.component';
import { findProjectBySlug, Project } from '../data/projects.data';
import { LocalizedText } from '../models/localized-text.model';
import { GroupedTechnologiesComponent } from '../shared/grouped-technologies/grouped-technologies.component';
import { ProjectStatusComponent } from '../shared/project-status/project-status.component';
import { getEditorialSections } from '../shared/project-content.util';
import { TranslatePipe } from '../core/i18n/translate.pipe';
import { LanguageService } from '../core/i18n/language.service';
import { PageMetaService } from '../core/seo/page-meta.service';

export interface GalleryItem {
  src: string;
  caption: string;
}

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [NgFor, NgIf, RouterModule, GroupedTechnologiesComponent, ProjectStatusComponent, TranslatePipe, ImageViewerComponent],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.css',
})
export class ProjectDetailComponent {
  project?: Project;
  private readonly pageMeta = inject(PageMetaService);
  private galleryCache?: { project: Project; lang: string; items: GalleryItem[] };

  constructor(
    private route: ActivatedRoute,
    public languageService: LanguageService
  ) {
    const slug = this.route.snapshot.paramMap.get('slug');
    this.project = findProjectBySlug(slug);

    effect(() => {
      this.languageService.language();
      if (!this.project) return;
      this.pageMeta.set({
        title: this.projectTitle,
        description: this.projectDescription,
        path: `/projets/${this.project.slug}/`,
      });
    });
  }

  /** Project date (ISO yyyy-mm-dd in the data) formatted for the active language. */
  get projectDate(): string {
    if (!this.project?.date) return '';
    const date = new Date(`${this.project.date}T00:00:00Z`);
    if (Number.isNaN(date.getTime())) return this.project.date;
    const locale = this.languageService.language() === 'en' ? 'en-US' : 'fr-FR';
    return new Intl.DateTimeFormat(locale, { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(date);
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

  get galleryImages(): string[] {
    if (!this.project) return [];
    return this.project.gallery.filter((image) => image !== this.project?.coverImage);
  }

  /** Gallery images with their captions, recomputed only when the project or language changes. */
  get galleryItems(): GalleryItem[] {
    if (!this.project) return [];
    const lang = this.languageService.language();
    const cache = this.galleryCache;
    if (cache && cache.project === this.project && cache.lang === lang) return cache.items;
    const items = this.galleryImages.map((src) => ({ src, caption: this.galleryCaption(src) }));
    this.galleryCache = { project: this.project, lang, items };
    return items;
  }

  galleryCaption(image: string): string {
    const caption = this.project?.galleryCaptions?.[image];
    return caption ? this.localized(caption) : '';
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
