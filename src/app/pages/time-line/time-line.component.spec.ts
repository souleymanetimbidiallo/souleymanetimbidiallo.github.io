import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeLineComponent } from './time-line.component';

describe('TimeLineComponent', () => {
  let component: TimeLineComponent;
  let fixture: ComponentFixture<TimeLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimeLineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TimeLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('shows Inetum contributions and four Capgemini engagements', () => {
    const employers = fixture.nativeElement.querySelectorAll('.employer');
    expect(employers[0].querySelector('.contributions')).not.toBeNull();
    expect(employers[1].querySelectorAll('.engagement').length).toBe(4);
  });

  it('keeps Drupal 9 first for DPGT', () => {
    const dpgt = component.experiences.flatMap((experience) => experience.engagements).find((engagement) => engagement.id === 'dpgt');
    expect(dpgt?.technologies[0]).toBe('drupal-9');
  });
});
