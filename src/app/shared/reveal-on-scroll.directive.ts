import { Directive, ElementRef, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appReveal]',
  standalone: true
})
export class RevealOnScrollDirective implements AfterViewInit {
  constructor(private el: ElementRef<HTMLElement>, @Inject(PLATFORM_ID) private platformId: object) {}

  ngAfterViewInit(): void {
    // Prerendered HTML stays visible: the animation is only set up in the browser.
    if (!isPlatformBrowser(this.platformId)) return;
    const node = this.el.nativeElement;
    node.classList.add('reveal');

    if (!('IntersectionObserver' in window)) {
      node.classList.add('reveal-in');
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          node.classList.add('reveal-in');
          io.unobserve(node);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -10% 0px' });

    io.observe(node);
  }
}
