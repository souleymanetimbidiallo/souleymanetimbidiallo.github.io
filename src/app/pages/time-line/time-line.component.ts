import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, NgFor, NgIf } from '@angular/common';
import { RevealOnScrollDirective } from '../../shared/reveal-on-scroll.directive';
import { LanguageService } from '../../core/i18n/language.service';
import { TranslatePipe } from '../../core/i18n/translate.pipe';

interface Experience {
  date: string;
  titre: string;
  lieu: string;
  description: string;
  image?: string;
}

@Component({
  selector: 'app-time-line',
  standalone: true,
  imports: [NgFor, NgIf, RevealOnScrollDirective, TranslatePipe],
  templateUrl: './time-line.component.html',
  styleUrls: ['./time-line.component.css']
})
export class TimeLineComponent implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: object, private languageService: LanguageService) {}

  private readonly experiencesFr: Experience[] = [
    { date: 'Sept. 2023 – Aujourd’hui', titre: 'Ingénieur logiciel', lieu: 'Inetum, France', description: 'Développement d’applications Java/Angular (Elastic, Docker, CI/CD).', image: 'assets/img/inetum.png' },
    { date: 'Avr. 2021 – Août 2023', titre: 'Ingénieur logiciel', lieu: 'Capgemini, Nantes', description: 'Nouvelles fonctionnalités & maintenance sur stack Java/Angular.', image: 'assets/img/capgemini.png' },
    { date: '2019 – 2023', titre: 'Étudiant (Licence + Master MIAGE)', lieu: 'Université de Rennes', description: 'Génie logiciel, projets data & web, mentions Bien.', image: 'assets/img/univ-rennes.png' },
  ];

  private readonly experiencesEn: Experience[] = [
    { date: 'Sep. 2023 – Present', titre: 'Software Engineer', lieu: 'Inetum, France', description: 'Development of Java/Angular applications (Elastic, Docker, CI/CD).', image: 'assets/img/inetum.png' },
    { date: 'Apr. 2021 – Aug. 2023', titre: 'Software Engineer', lieu: 'Capgemini, Nantes', description: 'New features and maintenance on Java/Angular stack.', image: 'assets/img/capgemini.png' },
    { date: '2019 – 2023', titre: 'Student (Bachelor + Master MIAGE)', lieu: 'University of Rennes', description: 'Software engineering, data & web projects.', image: 'assets/img/univ-rennes.png' },
  ];

  get experiences(): Experience[] {
    return this.languageService.language() === 'fr' ? this.experiencesFr : this.experiencesEn;
  }

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const cards = Array.from(document.querySelectorAll<HTMLElement>('.timeline-card'));
    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add('reveal');
            io.unobserve(e.target);
          }
        });
      }, { rootMargin: '0px 0px -10% 0px', threshold: 0.2 });

      cards.forEach(c => io.observe(c));
    } else {
      cards.forEach(c => c.classList.add('reveal'));
    }
  }
}
