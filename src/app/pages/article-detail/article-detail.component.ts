import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { NgIf } from '@angular/common';
import { BLOG_ARTICLES } from '../../data/articles.data';
; // À créer ou extraire

@Component({
  selector: 'app-article-detail',
  standalone: true,
  imports: [MarkdownModule, NgIf, RouterModule],
  templateUrl: './article-detail.component.html',
  styleUrl: './article-detail.component.css'
})
export class ArticleDetailComponent {
  slug: string | null;
  article: any;

  constructor(private route: ActivatedRoute) {
    this.slug = this.route.snapshot.paramMap.get('slug');
    this.article = BLOG_ARTICLES.find(a => a.slug === this.slug);
  }

  formatTitre(slug: string): string {
    return slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  }
}
