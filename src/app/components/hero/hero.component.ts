import { Component, AfterViewInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements AfterViewInit, OnDestroy {
  private intervalId?: number;

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const el = document.querySelector('.rotator') as HTMLElement | null;
    if (!el) return;

    const items = (el.getAttribute('data-items') || '')
      .split(',')
      .map(s => s.trim())
      .filter(Boolean);

    if (!items.length) return;

    // Respecte "reduced motion" : pas d'animation, on met la 1ʳᵉ valeur.
    const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      el.textContent = items[0];
      return;
    }

    // Petite animation "typewriter" ultra simple, sans lib.
    let i = 0, char = 0, typing = true;

    const tick = () => {
      const text = items[i];
      if (typing) {
        char++;
        el.textContent = text.slice(0, char);
        if (char >= text.length) {
          typing = false;
          this.intervalId = window.setTimeout(tick, 1500) as unknown as number; // pause en fin de mot
          return;
        }
      } else {
        char--;
        el.textContent = text.slice(0, char);
        if (char <= 0) {
          typing = true;
          i = (i + 1) % items.length;
        }
      }
      this.intervalId = window.setTimeout(tick, typing ? 45 : 25) as unknown as number;
    };

    // curseur visuel
    el.classList.add('cursor');
    tick();
  }

  ngOnDestroy(): void {
    if (this.intervalId) window.clearTimeout(this.intervalId);
  }
}
