import { DOCUMENT } from '@angular/common';
import { Injectable, effect, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';

import { LanguageService } from '../i18n/language.service';

const SITE_URL = 'https://souleymanetimbidiallo.github.io';

/** Description of the pages without their own metadata (home, blog, parcours), per language. */
export const DEFAULT_DESCRIPTION = {
  fr: 'Souleymane Diallo, ingénieur logiciel full-stack basé à Columbus (Ohio). Java, Spring Boot et Angular au quotidien ; PHP et Laravel dans mes projets. Ouvert aux postes en remote, hybride ou sur site.',
  en: 'Souleymane Diallo, full-stack software engineer based in Columbus, Ohio. Java, Spring Boot and Angular day to day; PHP and Laravel in my own projects. Open to remote, hybrid or on-site roles.',
} as const;

export interface PageMeta {
  title: string;
  description: string;
  /** Route path with a trailing slash, matching the URL GitHub Pages serves, e.g. "/projets/api-guinea-geo/". */
  path: string;
}

interface DefaultMeta {
  title: string;
  ogTitle: string;
  ogUrl: string;
  twitterTitle: string;
  canonical: string;
}

/**
 * Sets per-page title, description, Open Graph, Twitter and canonical tags
 * (the share image stays the default JPEG, which every network supports),
 * and restores the defaults on every navigation. The default description
 * follows the active language.
 */
@Injectable({ providedIn: 'root' })
export class PageMetaService {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);
  private readonly language = inject(LanguageService).language;
  private readonly defaults: DefaultMeta;
  /** True while a page (project, article) has set its own metadata. */
  private hasPageMeta = false;

  constructor() {
    this.defaults = {
      title: this.title.getTitle(),
      ogTitle: this.readMeta('property="og:title"'),
      ogUrl: this.readMeta('property="og:url"'),
      twitterTitle: this.readMeta('name="twitter:title"'),
      canonical: this.canonicalLink()?.getAttribute('href') ?? `${SITE_URL}/`,
    };

    inject(Router)
      .events.pipe(filter((event) => event instanceof NavigationStart))
      .subscribe(() => this.reset());

    // Pages with their own metadata update it themselves on a language change.
    effect(() => {
      this.language();
      if (!this.hasPageMeta) this.reset();
    });
  }

  set(page: PageMeta) {
    this.hasPageMeta = true;
    const title = `${page.title} | Souleymane Diallo`;
    const url = `${SITE_URL}${page.path}`;

    this.title.setTitle(title);
    this.meta.updateTag({ name: 'description', content: page.description });
    this.meta.updateTag({ property: 'og:title', content: title });
    this.meta.updateTag({ property: 'og:description', content: page.description });
    this.meta.updateTag({ property: 'og:url', content: url });
    this.meta.updateTag({ name: 'twitter:title', content: title });
    this.meta.updateTag({ name: 'twitter:description', content: page.description });
    this.canonicalLink()?.setAttribute('href', url);
  }

  reset() {
    const d = this.defaults;
    const description = DEFAULT_DESCRIPTION[this.language()];
    this.hasPageMeta = false;
    this.title.setTitle(d.title);
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ property: 'og:title', content: d.ogTitle });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:url', content: d.ogUrl });
    this.meta.updateTag({ name: 'twitter:title', content: d.twitterTitle });
    this.meta.updateTag({ name: 'twitter:description', content: description });
    this.canonicalLink()?.setAttribute('href', d.canonical);
  }

  private readMeta(selector: string): string {
    return this.meta.getTag(selector)?.content ?? '';
  }

  private canonicalLink(): HTMLLinkElement | null {
    return this.document.head.querySelector('link[rel="canonical"]');
  }
}
