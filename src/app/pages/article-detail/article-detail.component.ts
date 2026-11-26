import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MarkdownModule } from 'ngx-markdown';

import { catchError, of, switchMap } from 'rxjs';
import { takeUntilDestroyed, toObservable } from '@angular/core/rxjs-interop';

import { BLOG_ARTICLES, BlogArticle } from '../../data/articles.data';
import { TranslatePipe } from '../../core/i18n/translate.pipe';
import { LanguageService } from '../../core/i18n/language.service';
import { PageMetaService } from '../../core/seo/page-meta.service';

@Component({
    selector: 'app-article-detail',
    imports: [MarkdownModule, RouterModule, TranslatePipe],
    templateUrl: './article-detail.component.html',
    styleUrl: './article-detail.component.css'
})
export class ArticleDetailComponent {
  slug: string | null;
  article?: BlogArticle;
  articleContent = '';
  loading = false;
  loadError = false;
  private readonly pageMeta = inject(PageMetaService);

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
          // Keep the previous language's content visible until the new one arrives.
          this.updatePageMeta();
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

  private updatePageMeta() {
    if (!this.article) return;
    this.pageMeta.set({
      title: this.articleTitle,
      description: this.article.summary[this.languageService.language()],
      path: `/blog/${this.article.slug}/`,
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
