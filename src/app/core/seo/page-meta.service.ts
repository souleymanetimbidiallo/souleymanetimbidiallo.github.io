import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';

const SITE_URL = 'https://souleymanetimbidiallo.github.io';

export interface PageMeta {
  title: string;
  description: string;
  /** Route path with a trailing slash, matching the URL GitHub Pages serves, e.g. "/projets/api-guinea-geo/". */
  path: string;
}

interface DefaultMeta {
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
  ogUrl: string;
  twitterTitle: string;
  twitterDescription: string;
  canonical: string;
}

/**
 * Sets per-page title, description, Open Graph, Twitter and canonical tags
 * (the share image stays the default JPEG, which every network supports),
 * and restores the defaults from index.html on every navigation.
 */
@Injectable({ providedIn: 'root' })
export class PageMetaService {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);
  private readonly defaults: DefaultMeta;

  constructor() {
    this.defaults = {
      title: this.title.getTitle(),
      description: this.readMeta('name="description"'),
      ogTitle: this.readMeta('property="og:title"'),
      ogDescription: this.readMeta('property="og:description"'),
      ogUrl: this.readMeta('property="og:url"'),
      twitterTitle: this.readMeta('name="twitter:title"'),
      twitterDescription: this.readMeta('name="twitter:description"'),
      canonical: this.canonicalLink()?.getAttribute('href') ?? `${SITE_URL}/`,
    };

    inject(Router)
      .events.pipe(filter((event) => event instanceof NavigationStart))
      .subscribe(() => this.reset());
  }

  set(page: PageMeta) {
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
    this.title.setTitle(d.title);
    this.meta.updateTag({ name: 'description', content: d.description });
    this.meta.updateTag({ property: 'og:title', content: d.ogTitle });
    this.meta.updateTag({ property: 'og:description', content: d.ogDescription });
    this.meta.updateTag({ property: 'og:url', content: d.ogUrl });
    this.meta.updateTag({ name: 'twitter:title', content: d.twitterTitle });
    this.meta.updateTag({ name: 'twitter:description', content: d.twitterDescription });
    this.canonicalLink()?.setAttribute('href', d.canonical);
  }

  private readMeta(selector: string): string {
    return this.meta.getTag(selector)?.content ?? '';
  }

  private canonicalLink(): HTMLLinkElement | null {
    return this.document.head.querySelector('link[rel="canonical"]');
  }
}
