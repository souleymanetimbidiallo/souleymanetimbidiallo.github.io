import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ImageViewerComponent } from './image-viewer.component';

describe('ImageViewerComponent', () => {
  let fixture: ComponentFixture<ImageViewerComponent>;
  let component: ImageViewerComponent;
  let previousOverflow: string;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [ImageViewerComponent] }).compileComponents();
    previousOverflow = document.body.style.overflow;
    fixture = TestBed.createComponent(ImageViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
    document.body.style.overflow = previousOverflow;
  });

  it('opens a modal and restores the existing scroll setting when closed', () => {
    document.body.style.overflow = 'auto';
    component.open('assets/img/projects/api-guinea-geo/conakry-detail.png', 'Conakry');
    fixture.detectChanges();
    expect(component.dialog.nativeElement.open).toBeTrue();
    expect(document.body.style.overflow).toBe('hidden');
    expect(fixture.nativeElement.querySelector('img').alt).toBe('Conakry');
    component.close();
    expect(component.dialog.nativeElement.open).toBeFalse();
    expect(document.body.style.overflow).toBe('auto');
  });

  it('keeps zoom between fitted size and 300 percent and resets on reopening', () => {
    component.open('assets/img/projects/api-guinea-geo/conakry-detail.png', 'Conakry');
    component.changeZoom(-0.5);
    expect(component.zoom).toBe(1);
    for (let i = 0; i < 10; i++) component.changeZoom(0.5);
    expect(component.zoom).toBe(3);
    component.close();
    component.open('assets/img/projects/api-guinea-geo/kankan-api-response.png', 'Kankan');
    expect(component.zoom).toBe(1);
  });

  it('fits a portrait capture without distortion or upscaling', () => {
    component.open('assets/img/projects/api-guinea-geo/conakry-detail.png', 'Conakry');
    fixture.detectChanges();
    const image = component.fullImage!.nativeElement;
    Object.defineProperty(image, 'naturalWidth', { value: 1000 });
    Object.defineProperty(image, 'naturalHeight', { value: 2000 });
    Object.defineProperty(component.viewport.nativeElement, 'clientWidth', { value: 900 });
    Object.defineProperty(component.viewport.nativeElement, 'clientHeight', { value: 600 });
    component.fitImage();
    expect(component.fittedWidth).toBe(300);
  });

  it('does not close when clicking the image panel', () => {
    component.open('assets/img/projects/api-guinea-geo/conakry-detail.png', 'Conakry');
    fixture.detectChanges();
    fixture.nativeElement.querySelector('.viewer-panel').click();
    expect(component.dialog.nativeElement.open).toBeTrue();
    component.dialog.nativeElement.click();
    expect(component.dialog.nativeElement.open).toBeFalse();
  });

  it('restores scrolling when navigating away with the viewer open', () => {
    component.open('assets/img/projects/api-guinea-geo/conakry-detail.png', 'Conakry');
    fixture.destroy();
    expect(document.body.style.overflow).toBe(previousOverflow);
  });
});
