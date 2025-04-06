import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProjectDetailComponent } from './pages/project-detail.component';

export const routes: Routes = [
    {
      path: '',
      loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
    },
    { path: 'projets/:slug', component: ProjectDetailComponent }, 
  ];