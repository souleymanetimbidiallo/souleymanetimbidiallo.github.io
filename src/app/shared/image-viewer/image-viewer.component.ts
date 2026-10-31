import { DOCUMENT, NgIf } from '@angular/common';
import { Component, ElementRef, HostListener, Inject, OnDestroy, ViewChild } from '@angular/core';
import { TranslatePipe } from '../../core/i18n/translate.pipe';

@Component({
  selector: 'app-image-viewer',
  standalone: true,
  imports: [NgIf, TranslatePipe],
  templateUrl: './image-viewer.component.html',
  styleUrl: './image-viewer.component.css',
})
export class ImageViewerComponent implements OnDestroy {
  @ViewChild('dialog', { static: true }) dialog!: ElementRef<HTMLDialogElement>;
  @ViewChild('viewport', { static: true }) viewport!: ElementRef<HTMLDivElement>;
  @ViewChild('fullImage') fullImage?: ElementRef<HTMLImageElement>;

  image = '';
  caption = '';
  zoom = 1;
  fittedWidth = 0;
  private previousOverflow: string | undefined;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  open(image: string, caption: string): void {
    this.image = image;
    this.caption = caption;
    this.zoom = 1;
    this.fittedWidth = 0;
    if (!this.dialog.nativeElement.open) {
      this.previousOverflow = this.document.body.style.overflow;
      this.document.body.style.overflow = 'hidden';
      this.dialog.nativeElement.showModal();
    }
    this.viewport.nativeElement.scrollTo(0, 0);
  }

  close(): void {
    this.dialog.nativeElement.close();
    this.restoreScrolling();
  }

  onClosed(): void {
    if (this.dialog.nativeElement.open) return;
    this.image = '';
    this.restoreScrolling();
  }

  onBackdropClick(event: MouseEvent): void {
    if (event.target === this.dialog.nativeElement) this.close();
  }

  changeZoom(delta: number): void {
    this.zoom = Math.min(3, Math.max(1, this.zoom + delta));
  }

  @HostListener('window:resize')
  fitImage(): void {
    const image = this.fullImage?.nativeElement;
    if (!image?.naturalWidth || !this.dialog.nativeElement.open) return;
    const viewport = this.viewport.nativeElement;
    this.fittedWidth = Math.min(image.naturalWidth,
      viewport.clientWidth,
      image.naturalWidth * viewport.clientHeight / image.naturalHeight);
  }

  private restoreScrolling(): void {
    if (this.previousOverflow !== undefined) {
      this.document.body.style.overflow = this.previousOverflow;
      this.previousOverflow = undefined;
    }
  }

  ngOnDestroy(): void {
    if (this.dialog.nativeElement.open) this.dialog.nativeElement.close();
    this.restoreScrolling();
  }
}
