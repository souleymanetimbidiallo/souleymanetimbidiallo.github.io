import { Component, AfterViewInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { PROJECTS, Project } from '../data/projects.data';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [NgFor, NgIf, RouterModule],
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements AfterViewInit {
  project?: Project;

  constructor(private route: ActivatedRoute) {
    const slug = this.route.snapshot.paramMap.get('slug');
    this.project = PROJECTS.find(p => p.slug === slug);
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      if (window.initPortfolioSwiper) {
        window.initPortfolioSwiper();
      }
    }, 0);
  }
}

// 👇 Cette déclaration doit être placée en dehors de la classe
declare global {
  interface Window {
    initPortfolioSwiper: () => void;
  }
}
