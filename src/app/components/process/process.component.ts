import { Component } from '@angular/core';
import { NgClass, NgFor } from '@angular/common';

type Step = { icon: string; title: string; desc: string; };

@Component({
  selector: 'app-process',
  standalone: true,
  imports: [NgFor, NgClass],
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.css']
})
export class ProcessComponent {
  steps: Step[] = [
    { icon: 'bi-search',      title: 'Découverte', desc: 'Objectifs, périmètre, utilisateurs, KPI.' },
    { icon: 'bi-pencil',      title: 'Design',     desc: 'Maquettes, UI kit, specs techniques.' },
    { icon: 'bi-code-slash',  title: 'Développement', desc: 'Sprints courts, CI/CD, revues de code.' },
    { icon: 'bi-rocket',      title: 'Livraison',  desc: 'Mise en prod, suivi, itérations.' },
  ];
}
