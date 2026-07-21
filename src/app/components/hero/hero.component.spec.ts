import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroComponent } from './hero.component';

describe('HeroComponent', () => {
  let component: HeroComponent;
  let fixture: ComponentFixture<HeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('positions the profile as a Full-Stack Software Engineer without using Senior', () => {
    component.languageService.setLanguage('en');
    fixture.detectChanges();
    const text = fixture.nativeElement.textContent as string;
    expect(text).toContain('Full-Stack Software Engineer');
    expect(text).not.toContain('Senior');
  });

  it('presents Java first and PHP as the supporting ecosystem', () => {
    const primary = fixture.nativeElement.querySelector('.identity__primary').textContent;
    const secondary = fixture.nativeElement.querySelector('.identity__secondary').textContent;
    expect(primary).toContain('Java');
    expect(primary).toContain('Spring Boot');
    expect(primary).toContain('Angular');
    expect(secondary).toContain('PHP');
    expect(secondary).toContain('Laravel');
    expect(secondary).toContain('Symfony');
  });

  it('displays the recruiter-oriented positioning sentence', () => {
    component.languageService.setLanguage('en');
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.hero__lead').textContent).toContain('Building enterprise applications and digital products');
  });
});
