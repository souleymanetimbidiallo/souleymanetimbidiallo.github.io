import { DOCUMENT, NgClass } from '@angular/common';
import { Component, HostListener, Inject, OnDestroy, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LanguageService } from '../../core/i18n/language.service';
import { TranslatePipe } from '../../core/i18n/translate.pipe';

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
    @Inject(DOCUMENT) private document: Document
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

  ngOnDestroy(): void { this.document.body.classList.remove('nav-open'); }

  private updateBodyScroll(): void {
    this.document.body.classList.toggle('nav-open', this.mobileNavOpen);
  }

  private updateScrolledState(): void {
    const hero = document.getElementById('hero');

    if (!hero) {
      this.isScrolled = true;
      return;
    }

    this.isScrolled = hero.getBoundingClientRect().bottom <= 88;
  }
}
