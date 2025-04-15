import { Component, AfterViewInit, HostListener } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-time-line',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './time-line.component.html',
  styleUrl: './time-line.component.css'
})
export class TimeLineComponent implements AfterViewInit {
  experiences = [
    {
      date: "Septembre. 2023 - Aujourd'hui",
      titre: "Ingénieur logiciel",
      lieu: "Inetum, France",
      description: "Développement d’applications Java/Angular."
    },
    {
      date: "Avril 2021 - Août 2023",
      titre: "Ingénieur logiciel",
      lieu: "Capgemini Nantes",
      description: "Développement d’applications Java/Angular."
    },
    {
      date: "Septembre 2019 - Août 2023",
      titre: "Etudiant",
      lieu: "Université de Rennes",
      description: "Licence + Master en génie logiciel."
    },
    
    {
      date: "2019 - 2023",
      titre: "Co-fondateur & CTO",
      lieu: "Gui-Plus",
      description: "Développement d'applications"
    }
  ];

  ngAfterViewInit() {
    this.revealOnScroll();
  }

  @HostListener('window:scroll', [])
  onScroll() {
    this.revealOnScroll();
  }

  revealOnScroll() {
    const elements = document.querySelectorAll('.timeline-card');
    elements.forEach(el => {
      const top = el.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (top < windowHeight - 100) {
        el.classList.add('reveal');
      }
    });
  }
  
}
