import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { BLOG_ARTICLES } from '../../data/articles.data';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [NgFor, RouterModule, NgIf],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  articles = BLOG_ARTICLES;
}
