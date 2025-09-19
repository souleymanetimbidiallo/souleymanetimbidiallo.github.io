import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, NgFor, NgIf } from '@angular/common';
import { RevealOnScrollDirective } from '../../shared/reveal-on-scroll.directive';

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
  imports: [NgFor, NgIf, RevealOnScrollDirective],
  templateUrl: './time-line.component.html',
  styleUrls: ['./time-line.component.css']
})
export class TimeLineComponent implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  experiences: Experience[] = [
    {
      date: "Sept. 2023 – Aujourd’hui",
      titre: "Ingénieur logiciel",
      lieu: "Inetum, France",
      description: "Développement d’applications Java/Angular (Elastic, Docker, CI/CD).",
      image: "assets/img/inetum.png"
    },
    {
      date: "Avr. 2021 – Août 2023",
      titre: "Ingénieur logiciel",
      lieu: "Capgemini, Nantes",
      description: "Nouvelles fonctionnalités & maintenance sur stack Java/Angular.",
      image: "assets/img/capgemini.png"
    },
    {
      date: "2019 – 2023",
      titre: "Étudiant (Licence + Master MIAGE)",
      lieu: "Université de Rennes",
      description: "Génie logiciel, projets data & web, mentions Bien.",
      image: "assets/img/univ-rennes.png"
    },
    {
      date: "2019 – 2023",
      titre: "Co-fondateur & CTO",
      lieu: "Gui-Plus",
      description: "Conception et dev d’applications (web/mobile).",
      image: "assets/img/guiplus.jpg"
    }
  ];

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
