import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';

import { BLOG_ARTICLES, BlogArticle } from '../../data/articles.data';
import { TranslatePipe } from '../../core/i18n/translate.pipe';
import { LanguageService } from '../../core/i18n/language.service';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [NgFor, RouterModule, NgIf, TranslatePipe],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})
export class BlogComponent {
  articles = BLOG_ARTICLES;

  constructor(public languageService: LanguageService) {}

  getArticleTitle(article: BlogArticle): string {
    return article.title[this.languageService.language()];
  }

  getArticleSummary(article: BlogArticle): string {
    return article.summary[this.languageService.language()];
  }

  getArticleDate(article: BlogArticle): string {
    return article.date[this.languageService.language()];
  }
}