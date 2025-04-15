import { bootstrapApplication } from '@angular/platform-browser';
import { provideMarkdown } from 'ngx-markdown';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    ...appConfig.providers,
    provideMarkdown(),
    importProvidersFrom(HttpClientModule)
  ]
});
