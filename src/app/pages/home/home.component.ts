import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { AboutComponent } from '../../components/about/about.component';
import { ServicesComponent } from '../../components/services/services.component';
import { PortfolioComponent } from '../../components/portfolio/portfolio.component';
import { ContactComponent } from '../../components/contact/contact.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { TimeLineComponent } from '../time-line/time-line.component';
import { BlogComponent } from "../blog/blog.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    ServicesComponent,
    PortfolioComponent,
    ContactComponent,
    TimeLineComponent,
    FooterComponent,
    BlogComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const script = document.createElement('script');
      script.src = 'assets/js/main.js';
      document.body.appendChild(script);
    }
  }

}
