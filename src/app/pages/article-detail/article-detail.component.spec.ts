import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap, provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideMarkdown } from 'ngx-markdown';
import { ArticleDetailComponent } from './article-detail.component';
import { LanguageService } from '../../core/i18n/language.service';

describe('ArticleDetailComponent', () => {
  let component: ArticleDetailComponent;
  let fixture: ComponentFixture<ArticleDetailComponent>;
  let http: HttpTestingController;
  let language: LanguageService;
  const articlePath = 'assets/articles/concevoir-api-geographique-guinee';

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticleDetailComponent],
      providers: [
        provideRouter([]), provideHttpClient(), provideHttpClientTesting(), provideMarkdown(),
        { provide: ActivatedRoute, useValue: { snapshot: { paramMap: convertToParamMap({ slug: 'concevoir-api-geographique-guinee' }) } } },
      ],
    }).compileComponents();
    language = TestBed.inject(LanguageService);
    language.language.set('fr');
    http = TestBed.inject(HttpTestingController);
    fixture = TestBed.createComponent(ArticleDetailComponent);
    component = fixture.componentInstance;
  });

  afterEach(() => http.verify());

  it('loads French content, then replaces it when switching to English', () => {
    fixture.detectChanges();
    http.expectOne(`${articlePath}.md`).flush('Contenu français');
    expect(component.articleContent).toBe('Contenu français');
    language.language.set('en');
    fixture.detectChanges();
    expect(component.loading).toBeTrue();
    expect(component.articleContent).toBe('');
    http.expectOne(`${articlePath}.en.md`).flush('English content');
    expect(component.articleContent).toBe('English content');
    expect(component.articleTitle).toBe('Designing a Geographic API for Guinea');
    expect(component.loading).toBeFalse();
  });

  it('loads English directly when English is already selected', () => {
    language.language.set('en');
    fixture.detectChanges();
    http.expectOne(`${articlePath}.en.md`).flush('English content');
    expect(component.articleContent).toBe('English content');
  });

  it('cancels the previous request when the language changes', () => {
    fixture.detectChanges();
    const frenchRequest = http.expectOne(`${articlePath}.md`);
    language.language.set('en');
    fixture.detectChanges();
    expect(frenchRequest.cancelled).toBeTrue();
    http.expectOne(`${articlePath}.en.md`).flush('English content');
    language.language.set('fr');
    fixture.detectChanges();
    http.expectOne(`${articlePath}.md`).flush('Retour en français');
    expect(component.articleContent).toBe('Retour en français');
  });

  it('shows an error instead of loading forever and recovers on language change', () => {
    fixture.detectChanges();
    http.expectOne(`${articlePath}.md`).flush('Missing', { status: 404, statusText: 'Not Found' });
    expect(component.loadError).toBeTrue();
    expect(component.loading).toBeFalse();
    language.language.set('en');
    fixture.detectChanges();
    http.expectOne(`${articlePath}.en.md`).flush('English content');
    expect(component.loadError).toBeFalse();
    expect(component.articleContent).toBe('English content');
  });
});
