import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MarkdownModule } from 'ngx-markdown';
import { NgIf } from '@angular/common';
import { catchError, of, switchMap } from 'rxjs';
import { takeUntilDestroyed, toObservable } from '@angular/core/rxjs-interop';

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
  articleContent = '';
  loading = false;
  loadError = false;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    public languageService: LanguageService
  ) {
    this.slug = this.route.snapshot.paramMap.get('slug');
    this.article = BLOG_ARTICLES.find((a) => a.slug === this.slug);

    if (!this.article) return;

    toObservable(this.languageService.language)
      .pipe(
        switchMap(() => {
          this.articleContent = '';
          this.loading = true;
          this.loadError = false;
          return this.http.get(this.markdownSrc, { responseType: 'text' }).pipe(
            catchError(() => {
              this.loadError = true;
              return of('');
            })
          );
        }),
        takeUntilDestroyed()
      )
      .subscribe((content) => {
        this.articleContent = content;
        this.loading = false;
        this.loadError = this.loadError || !content.trim();
      });
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
    const suffix = this.languageService.language() === 'en' ? '.en' : '';
    return `assets/articles/${this.article.slug}${suffix}.md`;
  }
}
