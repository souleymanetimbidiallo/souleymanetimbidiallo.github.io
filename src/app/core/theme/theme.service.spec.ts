import { TestBed } from '@angular/core/testing';
import { ThemeService } from './theme.service';

describe('ThemeService', () => {
  let systemDark: boolean;
  let listeners: Array<() => void>;
  let mediaQuery: MediaQueryList;

  beforeEach(() => {
    window.localStorage.removeItem('portfolio-theme');
    systemDark = false;
    listeners = [];
    mediaQuery = {
      get matches() { return systemDark; },
      media: '(prefers-color-scheme: dark)',
      onchange: null,
      addEventListener: jasmine.createSpy('addEventListener').and.callFake((_type: string, listener: EventListenerOrEventListenerObject) => listeners.push(listener as () => void)),
      removeEventListener: jasmine.createSpy('removeEventListener').and.callFake((_type: string, listener: EventListenerOrEventListenerObject) => listeners = listeners.filter((item) => item !== listener)),
      addListener: jasmine.createSpy('addListener'),
      removeListener: jasmine.createSpy('removeListener'),
      dispatchEvent: () => true,
    } as unknown as MediaQueryList;
    spyOn(window, 'matchMedia').and.returnValue(mediaQuery);
    TestBed.configureTestingModule({});
  });

  afterEach(() => {
    TestBed.resetTestingModule();
    window.localStorage.removeItem('portfolio-theme');
    document.documentElement.removeAttribute('data-theme');
    document.documentElement.style.removeProperty('color-scheme');
  });

  function createService(): ThemeService { return TestBed.inject(ThemeService); }
  function emitSystemChange(dark: boolean): void { systemDark = dark; listeners.forEach((listener) => listener()); }

  it('defaults to system when no valid preference exists', () => {
    const service = createService();
    expect(service.preference()).toBe('system');
    expect(service.resolvedTheme()).toBe('light');
  });

  it('resolves saved light and dark preferences', () => {
    window.localStorage.setItem('portfolio-theme', 'light');
    expect(createService().resolvedTheme()).toBe('light');
    TestBed.resetTestingModule();
    window.localStorage.setItem('portfolio-theme', 'dark');
    expect(createService().resolvedTheme()).toBe('dark');
  });

  it('resolves and reacts to system preference changes', () => {
    systemDark = true;
    const service = createService();
    expect(service.resolvedTheme()).toBe('dark');
    emitSystemChange(false);
    expect(service.resolvedTheme()).toBe('light');
  });

  it('keeps explicit light and dark preferences independent of system changes', () => {
    const service = createService();
    service.setPreference('light');
    emitSystemChange(true);
    expect(service.resolvedTheme()).toBe('light');
    service.setPreference('dark');
    emitSystemChange(false);
    expect(service.resolvedTheme()).toBe('dark');
  });

  it('falls back safely from an invalid stored value', () => {
    window.localStorage.setItem('portfolio-theme', 'invalid');
    expect(createService().preference()).toBe('system');
  });

  it('persists the selected preference', () => {
    const service = createService();
    service.setPreference('dark');
    expect(window.localStorage.getItem('portfolio-theme')).toBe('dark');
  });

  it('synchronizes data-theme and color-scheme', () => {
    const service = createService();
    service.setPreference('dark');
    expect(document.documentElement.dataset['theme']).toBe('dark');
    expect(document.documentElement.style.colorScheme).toBe('dark');
  });

  it('cleans up its media-query listener', () => {
    const service = createService();
    service.ngOnDestroy();
    expect(mediaQuery.removeEventListener).toHaveBeenCalledWith('change', jasmine.any(Function));
  });
});
