import { Injectable, signal } from '@angular/core';

export type AppLanguage = 'fr' | 'en';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly storageKey = 'app_lang';
  readonly language = signal<AppLanguage>('fr');

  constructor() {
    if (typeof window !== 'undefined') {
      const saved = window.localStorage.getItem(this.storageKey) as AppLanguage | null;
      if (saved === 'fr' || saved === 'en') {
        this.language.set(saved);
      }
    }
  }

  setLanguage(lang: AppLanguage) {
    this.language.set(lang);
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(this.storageKey, lang);
    }
  }

  toggleLanguage() {
    this.setLanguage(this.language() === 'fr' ? 'en' : 'fr');
  }
}
