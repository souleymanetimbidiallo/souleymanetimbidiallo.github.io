import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectCardComponent } from './project-card.component';
import { PROJECTS } from '../../data/projects.data';
import { provideRouter } from '@angular/router';

describe('ProjectCardComponent', () => {
  let fixture: ComponentFixture<ProjectCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [ProjectCardComponent], providers: [provideRouter([])] }).compileComponents();
    fixture = TestBed.createComponent(ProjectCardComponent);
  });

  it('renders cleanly without an image or empty external links', () => {
    const sourceProject = PROJECTS.find((item) => item.id === 'yiidein');
    expect(sourceProject).toBeDefined();
    const project = { ...sourceProject!, coverImage: undefined, repository: undefined, demo: undefined, demos: undefined };
    fixture.componentRef.setInput('project', project);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.project-image')).toBeNull();
    expect(fixture.nativeElement.querySelectorAll('.actions a').length).toBe(1);
    expect(fixture.nativeElement.querySelector('.actions a')).not.toBeNull();
  });

  it('limits the secondary-card technology list to four items', () => {
    const project = PROJECTS.find((item) => item.id === 'gn-exams-2026')!;
    fixture.componentRef.setInput('project', project);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelectorAll('.project-body > ul li').length).toBeLessThanOrEqual(4);
  });
});
