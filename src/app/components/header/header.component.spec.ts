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
});
