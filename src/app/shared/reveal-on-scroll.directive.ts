import { Directive, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appReveal]',
  standalone: true
})
export class RevealOnScrollDirective implements AfterViewInit {
  constructor(private el: ElementRef<HTMLElement>) {}

  ngAfterViewInit(): void {
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
