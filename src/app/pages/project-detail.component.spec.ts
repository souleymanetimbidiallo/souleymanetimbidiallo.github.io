import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDetailComponent } from './project-detail.component';
import { findProjectBySlug } from '../data/projects.data';
import { provideRouter } from '@angular/router';

describe('ProjectDetailComponent', () => {
  let component: ProjectDetailComponent;
  let fixture: ComponentFixture<ProjectDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectDetailComponent],
      providers: [provideRouter([])]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('opens a project capture in the image viewer when clicked', () => {
    component.project = findProjectBySlug('api-guinea-geo');
    fixture.detectChanges();
    const button = fixture.nativeElement.querySelector('.gallery .project-image-button') as HTMLButtonElement;
    button.click();
    fixture.detectChanges();
    const dialog = fixture.nativeElement.querySelector('dialog') as HTMLDialogElement;
    expect(dialog.open).toBeTrue();
    expect(dialog.querySelector('img')?.getAttribute('src')).toBe(component.galleryImages[0]);
    expect(dialog.querySelector('img')?.alt).toBe(component.galleryCaption(component.galleryImages[0]));
    dialog.querySelector('button[autofocus]')?.dispatchEvent(new MouseEvent('click'));
    expect(dialog.open).toBeFalse();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
