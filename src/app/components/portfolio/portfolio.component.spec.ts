import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioComponent } from './portfolio.component';
import { provideRouter } from '@angular/router';

describe('PortfolioComponent', () => {
  let component: PortfolioComponent;
  let fixture: ComponentFixture<PortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioComponent],
      providers: [provideRouter([])]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('features KAGLOB ERP and Yiidein', () => {
    const ids = component.featuredProjects.map((project) => project.id);
    expect(ids).toContain('kaglob-erp');
    expect(ids).toContain('yiidein');
  });

  it('uses the refined featured project order', () => {
    expect(component.featuredProjects.map((project) => project.id)).toEqual(['kaglob-erp', 'yiidein', 'cee-2026', 'citoykaidi']);
  });

  it('keeps Web, Mobile and Data projects discoverable through filters', () => {
    for (const category of ['web', 'mobile', 'data'] as const) {
      component.filterByCategory(category);
      expect(component.displayedProjects.length).toBeGreaterThan(0);
      expect(component.displayedProjects.every((project) => project.portfolioFilter === category)).toBeTrue();
    }
  });

  it('does not include enterprise engagements in the personal project inventory', () => {
    const ids = component.allProjects.map((project) => project.id);
    expect(ids).not.toContain('phenix');
    expect(ids).not.toContain('staffing-cgn');
  });
});
