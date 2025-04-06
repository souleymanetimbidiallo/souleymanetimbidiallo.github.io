import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

declare var Typed: any;

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements AfterViewInit {

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // attend que le DOM soit bien rendu
      requestAnimationFrame(() => {
        setTimeout(() => {
          const typedEl = document.querySelector('.typed') as HTMLElement;

          if (typedEl && !typedEl.getAttribute('data-typed-loaded')) {
            const items = typedEl.getAttribute('data-typed-items')?.split(',') || [];

            const typed = new Typed('.typed', {
              strings: items.map(i => i.trim()),
              loop: true,
              typeSpeed: 70,
              backSpeed: 40,
              backDelay: 1800
            });

            typedEl.setAttribute('data-typed-loaded', 'true');
          }
        }, 300); // délai + long pour s'assurer du rendu
      });
    }
  }
}
