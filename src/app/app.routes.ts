import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProjectDetailComponent } from './pages/project-detail.component';

export const routes: Routes = [
    {
      path: '',
      loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
    },
    {
      path: 'parcours',
      loadComponent: () => import('./pages/time-line/time-line.component').then(m => m.TimeLineComponent)
    },
    {
      path: 'blog',
      loadComponent: () => import('./pages/blog/blog.component').then(m => m.BlogComponent)
    },
    {
      path: 'blog/:slug',
      loadComponent: () =>
        import('./pages/article-detail/article-detail.component').then(m => m.ArticleDetailComponent)
    },    
    { path: 'projets/:slug', component: ProjectDetailComponent }, 
  ];