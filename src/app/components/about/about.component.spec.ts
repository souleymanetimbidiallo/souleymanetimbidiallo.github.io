import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponent } from './about.component';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('shows core expertise before the complete technology groups', () => {
    const core = fixture.nativeElement.querySelector('.core-stack');
    const groups = fixture.nativeElement.querySelector('.skill-grid');
    expect(core.compareDocumentPosition(groups) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
    const text = core.textContent as string;
    for (const technology of ['Java', 'Spring Boot', 'Angular', 'PHP', 'Laravel 12', 'Symfony', 'Docker', 'PostgreSQL']) expect(text).toContain(technology);
  });
});
