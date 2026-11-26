import { Injectable, inject, signal, DOCUMENT } from '@angular/core';
import { Meta } from '@angular/platform-browser';

export type AppLanguage = 'fr' | 'en';

const OG_LOCALES: Record<AppLanguage, string> = { fr: 'fr_FR', en: 'en_US' };

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly storageKey = 'app_lang';
  private readonly document = inject(DOCUMENT);
  private readonly meta = inject(Meta);
  readonly language = signal<AppLanguage>('en');

  constructor() {
    if (typeof window !== 'undefined') {
      const saved = window.localStorage.getItem(this.storageKey) as AppLanguage | null;
      if (saved === 'fr' || saved === 'en') {
        this.language.set(saved);
      }
    }
    this.syncDocumentLanguage(this.language());
  }

  setLanguage(lang: AppLanguage) {
    this.language.set(lang);
    this.syncDocumentLanguage(lang);
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(this.storageKey, lang);
    }
  }

  toggleLanguage() {
    this.setLanguage(this.language() === 'en' ? 'fr' : 'en');
  }

  private syncDocumentLanguage(lang: AppLanguage) {
    this.document.documentElement.lang = lang;
    const other: AppLanguage = lang === 'fr' ? 'en' : 'fr';
    this.meta.updateTag({ property: 'og:locale', content: OG_LOCALES[lang] });
    this.meta.updateTag({ property: 'og:locale:alternate', content: OG_LOCALES[other] });
  }
}
