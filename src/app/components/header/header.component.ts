import { DOCUMENT, NgClass, isPlatformBrowser } from '@angular/common';
import { Component, HostListener, Inject, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LanguageService } from '../../core/i18n/language.service';
import { TranslatePipe } from '../../core/i18n/translate.pipe';
import { ThemePreference, ThemeService } from '../../core/theme/theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass, RouterModule, TranslatePipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit, OnDestroy {
  constructor(
    public languageService: LanguageService,
    public themeService: ThemeService,
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: object
  ) {}

  mobileNavOpen = false;
  isScrolled = false;

  ngOnInit(): void {
    this.updateScrolledState();
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.updateScrolledState();
  }

  @HostListener('window:resize')
  onWindowResize(): void {
    this.updateScrolledState();
    if (window.innerWidth >= 992) this.closeMobileNav();
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.closeMobileNav();
  }

  toggleMobileNav(): void {
    this.mobileNavOpen = !this.mobileNavOpen;
    this.updateBodyScroll();
  }

  closeMobileNav(): void {
    this.mobileNavOpen = false;
    this.updateBodyScroll();
  }

  setTheme(event: Event): void {
    this.themeService.setPreference((event.target as HTMLSelectElement).value as ThemePreference);
  }

  ngOnDestroy(): void { this.document.body.classList.remove('nav-open'); }

  private updateBodyScroll(): void {
    this.document.body.classList.toggle('nav-open', this.mobileNavOpen);
  }

  private updateScrolledState(): void {
    const hero = this.document.getElementById('hero');

    if (!hero) {
      this.isScrolled = true;
      return;
    }
    // Prerendered pages start at the top, above the hero's bottom edge.
    if (!isPlatformBrowser(this.platformId)) return;

    this.isScrolled = hero.getBoundingClientRect().bottom <= 88;
  }
}
