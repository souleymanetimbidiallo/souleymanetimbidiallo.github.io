import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { NgIf } from '@angular/common';

import { BLOG_ARTICLES, BlogArticle } from '../../data/articles.data';
import { TranslatePipe } from '../../core/i18n/translate.pipe';
import { LanguageService } from '../../core/i18n/language.service';

@Component({
  selector: 'app-article-detail',
  standalone: true,
  imports: [MarkdownModule, NgIf, RouterModule, TranslatePipe],
  templateUrl: './article-detail.component.html',
  styleUrl: './article-detail.component.css',
})
export class ArticleDetailComponent {
  slug: string | null;
  article?: BlogArticle;

  constructor(
    private route: ActivatedRoute,
    public languageService: LanguageService
  ) {
    this.slug = this.route.snapshot.paramMap.get('slug');
    this.article = BLOG_ARTICLES.find((a) => a.slug === this.slug);
  }

  get articleTitle(): string {
    if (!this.article) return '';
    return this.article.title[this.languageService.language()];
  }

  get articleDate(): string {
    if (!this.article) return '';
    return this.article.date[this.languageService.language()];
  }

  get markdownSrc(): string {
    if (!this.article) return '';
    return `assets/articles/${this.article.slug}.md`;
  }
}