import { TestBed } from '@angular/core/testing';
import { Meta } from '@angular/platform-browser';

import { LanguageService } from './language.service';

describe('LanguageService', () => {
  beforeEach(() => {
    localStorage.removeItem('app_lang');
    TestBed.configureTestingModule({});
  });

  afterEach(() => localStorage.removeItem('app_lang'));

  it('keeps the <html lang> attribute and og:locale in sync with the active language', () => {
    const service = TestBed.inject(LanguageService);
    const meta = TestBed.inject(Meta);
    expect(document.documentElement.lang).toBe('fr');

    service.setLanguage('en');
    expect(document.documentElement.lang).toBe('en');
    expect(meta.getTag('property="og:locale"')?.content).toBe('en_US');
    expect(meta.getTag('property="og:locale:alternate"')?.content).toBe('fr_FR');

    service.toggleLanguage();
    expect(document.documentElement.lang).toBe('fr');
    expect(meta.getTag('property="og:locale"')?.content).toBe('fr_FR');
  });
});
