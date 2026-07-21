import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { TranslatePipe } from '../../core/i18n/translate.pipe';
import { getTechnologyLabel } from '../../data/technologies.data';

interface SkillGroup { titleKey: string; technologies: string[]; }

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgFor, TranslatePipe],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  readonly coreTechnologies = ['java', 'spring-boot', 'angular', 'php', 'laravel', 'symfony', 'docker', 'postgresql'];
  readonly skillGroups: SkillGroup[] = [
    { titleKey: 'skills.java', technologies: ['java', 'spring', 'spring-boot'] },
    { titleKey: 'skills.frontend', technologies: ['angular', 'react', 'typescript', 'javascript', 'tailwind-css', 'bootstrap', 'vite'] },
    { titleKey: 'skills.php', technologies: ['php', 'symfony', 'laravel', 'drupal', 'livewire', 'twig', 'blade'] },
    { titleKey: 'skills.data', technologies: ['postgresql', 'oracle', 'mariadb', 'sqlite', 'elasticsearch', 'duckdb', 'pandas', 'plotly'] },
    { titleKey: 'skills.delivery', technologies: ['docker', 'gitlab-ci-cd', 'flyway', 'vercel'] },
  ];

  technologyLabel(id: string): string { return getTechnologyLabel(id); }
}
