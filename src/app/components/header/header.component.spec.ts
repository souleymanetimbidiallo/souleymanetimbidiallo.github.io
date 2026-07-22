import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { provideRouter } from '@angular/router';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
      providers: [provideRouter([])]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('opens and closes the mobile navigation', () => {
    component.toggleMobileNav();
    expect(component.mobileNavOpen).toBeTrue();
    component.closeMobileNav();
    expect(component.mobileNavOpen).toBeFalse();
  });

  it('closes the mobile navigation on Escape', () => {
    component.toggleMobileNav();
    component.onEscape();
    expect(component.mobileNavOpen).toBeFalse();
  });

  it('exposes a localized, keyboard-accessible theme selector', () => {
    const select = fixture.nativeElement.querySelector('#theme-preference') as HTMLSelectElement;
    expect(select).not.toBeNull();
    expect(select.getAttribute('aria-label')).toBeTruthy();
    expect(Array.from(select.options).map((option) => option.value)).toEqual(['system', 'light', 'dark']);
  });

  it('changes the persisted theme preference through the header control', () => {
    const select = fixture.nativeElement.querySelector('#theme-preference') as HTMLSelectElement;
    select.value = 'dark';
    select.dispatchEvent(new Event('change'));
    fixture.detectChanges();
    expect(component.themeService.preference()).toBe('dark');
  });

  it('keeps language switching functional', () => {
    const initial = component.languageService.language();
    component.languageService.toggleLanguage();
    expect(component.languageService.language()).not.toBe(initial);
  });
});
