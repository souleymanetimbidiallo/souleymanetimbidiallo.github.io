import {
  Component,
  AfterViewInit,
  OnDestroy,
  Inject,
  PLATFORM_ID,
  effect,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { TranslatePipe } from '../../core/i18n/translate.pipe';
import { LanguageService } from '../../core/i18n/language.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent implements AfterViewInit, OnDestroy {
  private timeoutId?: number;
  private rotatorEl?: HTMLElement | null;

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    public languageService: LanguageService
  ) {
    effect(() => {
      this.languageService.language();

      if (!isPlatformBrowser(this.platformId)) return;
      if (!this.rotatorEl) return;

      this.startRotator();
    });
  }

  get cvUrl(): string {
    return this.languageService.language() === 'fr'
      ? 'assets/pdf/cv-souleymane-diallo-fr.pdf'
      : 'assets/pdf/resume-souleymane-diallo-en.pdf';
  }

  get cvDownloadName(): string {
    return this.languageService.language() === 'fr'
      ? 'CV-Souleymane-Diallo-FR.pdf'
      : 'Resume-Souleymane-Diallo-EN.pdf';
  }

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    this.rotatorEl = document.querySelector('.rotator') as HTMLElement | null;
    if (!this.rotatorEl) return;

    this.startRotator();
  }

  private startRotator(): void {
    if (!this.rotatorEl) return;

    this.clearRotatorTimer();

    const el = this.rotatorEl;
    const items = (el.getAttribute('data-items') || '')
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean);

    if (!items.length) {
      el.textContent = '';
      return;
    }

    const reduced = window.matchMedia?.(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (reduced) {
      el.textContent = items[0];
      el.classList.remove('cursor');
      return;
    }

    el.classList.add('cursor');

    let i = 0;
    let char = 0;
    let typing = true;

    const tick = () => {
      const text = items[i];

      if (typing) {
        char++;
        el.textContent = text.slice(0, char);

        if (char >= text.length) {
          typing = false;
          this.timeoutId = window.setTimeout(tick, 1500);
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

      this.timeoutId = window.setTimeout(tick, typing ? 45 : 25);
    };

    el.textContent = '';
    tick();
  }

  private clearRotatorTimer(): void {
    if (this.timeoutId) {
      window.clearTimeout(this.timeoutId);
      this.timeoutId = undefined;
    }
  }

  ngOnDestroy(): void {
    this.clearRotatorTimer();
  }
}