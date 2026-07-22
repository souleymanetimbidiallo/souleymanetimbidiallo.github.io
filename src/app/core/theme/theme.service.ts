import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, OnDestroy, PLATFORM_ID, signal } from '@angular/core';

export type ThemePreference = 'system' | 'light' | 'dark';
export type ResolvedTheme = 'light' | 'dark';

const STORAGE_KEY = 'portfolio-theme';
const DARK_QUERY = '(prefers-color-scheme: dark)';

@Injectable({ providedIn: 'root' })
export class ThemeService implements OnDestroy {
  readonly preference = signal<ThemePreference>('system');
  readonly resolvedTheme = signal<ResolvedTheme>('light');

  private mediaQuery?: MediaQueryList;
  private readonly systemChangeListener = () => {
    if (this.preference() === 'system') this.synchronizeTheme();
  };

  constructor(
    @Inject(DOCUMENT) private readonly document: Document,
    @Inject(PLATFORM_ID) platformId: object
  ) {
    if (!isPlatformBrowser(platformId)) return;

    this.mediaQuery = window.matchMedia?.(DARK_QUERY);
    this.preference.set(this.readStoredPreference());
    this.addSystemListener();
    this.synchronizeTheme();
  }

  setPreference(preference: ThemePreference): void {
    if (!this.isPreference(preference)) return;
    this.preference.set(preference);
    this.persistPreference(preference);
    this.synchronizeTheme();
  }

  ngOnDestroy(): void {
    if (!this.mediaQuery) return;
    if (this.mediaQuery.removeEventListener) {
      this.mediaQuery.removeEventListener('change', this.systemChangeListener);
    } else {
      this.mediaQuery.removeListener?.(this.systemChangeListener);
    }
  }

  private readStoredPreference(): ThemePreference {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      return this.isPreference(stored) ? stored : 'system';
    } catch {
      return 'system';
    }
  }

  private persistPreference(preference: ThemePreference): void {
    try {
      window.localStorage.setItem(STORAGE_KEY, preference);
    } catch {
      // Storage can be unavailable in private or restricted browser contexts.
    }
  }

  private synchronizeTheme(): void {
    const preference = this.preference();
    const resolved: ResolvedTheme = preference === 'system'
      ? (this.mediaQuery?.matches ? 'dark' : 'light')
      : preference;

    this.resolvedTheme.set(resolved);
    this.document.documentElement.dataset['theme'] = resolved;
    this.document.documentElement.style.colorScheme = resolved;
    this.document.querySelector<HTMLMetaElement>('meta[name="theme-color"]')
      ?.setAttribute('content', resolved === 'dark' ? '#0b1220' : '#f8fafc');
  }

  private addSystemListener(): void {
    if (!this.mediaQuery) return;
    if (this.mediaQuery.addEventListener) {
      this.mediaQuery.addEventListener('change', this.systemChangeListener);
    } else {
      this.mediaQuery.addListener?.(this.systemChangeListener);
    }
  }

  private isPreference(value: unknown): value is ThemePreference {
    return value === 'system' || value === 'light' || value === 'dark';
  }
}
