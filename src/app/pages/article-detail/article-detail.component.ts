import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MarkdownModule } from 'ngx-markdown';
import { NgIf } from '@angular/common';
import { catchError, of } from 'rxjs';

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
export class ArticleDetailComponent implements OnInit {
  slug: string | null;
  article?: BlogArticle;
  articleContent = '';

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    public languageService: LanguageService
  ) {
    this.slug = this.route.snapshot.paramMap.get('slug');
    this.article = BLOG_ARTICLES.find((a) => a.slug === this.slug);
  }

  ngOnInit(): void {
    if (!this.article) return;

    this.http
      .get(this.markdownSrc, { responseType: 'text' })
      .pipe(catchError(() => of('')))
      .subscribe((content) => {
        this.articleContent = content;
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
    return `assets/articles/${this.article.slug}.md`;
  }
}
