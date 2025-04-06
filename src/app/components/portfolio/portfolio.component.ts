import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router'; 
import { PROJECTS, Project } from '../../data/projects.data';


@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [NgFor, NgIf, RouterModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  allProjects: Project[] = PROJECTS;
  filteredProjects: Project[] = [...this.allProjects];

  categories = ['Tous', 'Application web', 'Mobile', 'Data'];

  selectedCategory = 'Tous';

  filterByCategory(category: string) {
    this.selectedCategory = category;
    this.filteredProjects = category === 'Tous'
      ? this.allProjects
      : this.allProjects.filter(p => p.category === category);
  }
}
