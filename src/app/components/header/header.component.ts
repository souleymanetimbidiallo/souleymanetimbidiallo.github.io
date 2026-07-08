import { Component, HostListener, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
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
export class HeaderComponent implements OnInit {
  constructor(public languageService: LanguageService) {}

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
  }

  toggleMobileNav(): void {
    this.mobileNavOpen = !this.mobileNavOpen;
  }

  closeMobileNav(): void {
    this.mobileNavOpen = false;
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
