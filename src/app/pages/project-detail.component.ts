import { Component, AfterViewInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { PROJECTS, Project } from '../data/projects.data';
import { TranslatePipe } from '../core/i18n/translate.pipe';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [NgFor, NgIf, RouterModule, TranslatePipe],
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

declare global {
  interface Window {
    initPortfolioSwiper: () => void;
  }
}
