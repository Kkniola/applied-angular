import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard';
import { HomeComponent } from './pages/home';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'developer-news',
    loadChildren: () =>
      import('../developer-news/developer-news.routes').then(
        (d) => d.DEVELOPER_NEWS_ROUTES,
      ),
  },
  {
    path: 'demos',
    loadChildren: () =>
      import('../demos/demos.routes').then((d) => d.DEMO_ROUTES),
  },
];
