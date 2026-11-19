import { TestBed } from '@angular/core/testing';
import { Meta } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';

import { LanguageService } from '../i18n/language.service';
import { DEFAULT_DESCRIPTION, PageMetaService } from './page-meta.service';

describe('PageMetaService', () => {
  let service: PageMetaService;
  let language: LanguageService;
  let meta: Meta;
  const description = () => meta.getTag('name="description"')?.content;

  beforeEach(() => {
    localStorage.removeItem('app_lang');
    TestBed.configureTestingModule({ providers: [provideRouter([])] });
    language = TestBed.inject(LanguageService);
    language.setLanguage('fr');
    service = TestBed.inject(PageMetaService);
    meta = TestBed.inject(Meta);
    TestBed.flushEffects();
  });

  afterEach(() => localStorage.removeItem('app_lang'));

  it('translates the default description when the language changes', () => {
    expect(description()).toBe(DEFAULT_DESCRIPTION.fr);
    language.setLanguage('en');
    TestBed.flushEffects();
    expect(description()).toBe(DEFAULT_DESCRIPTION.en);
    expect(meta.getTag('property="og:description"')?.content).toBe(DEFAULT_DESCRIPTION.en);
    expect(meta.getTag('name="twitter:description"')?.content).toBe(DEFAULT_DESCRIPTION.en);
  });

  it('does not overwrite metadata set by a page when the language changes', () => {
    service.set({ title: 'Projet', description: 'Page description', path: '/projets/x/' });
    language.setLanguage('en');
    TestBed.flushEffects();
    expect(description()).toBe('Page description');
    service.reset();
    expect(description()).toBe(DEFAULT_DESCRIPTION.en);
  });
});
