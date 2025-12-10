import {Routes} from '@angular/router';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '',
    loadComponent: () =>
      import('./layout/auth-layout/auth-layout').then(c => c.AuthLayout),
    children: [
      {
        path: 'login',
        loadComponent: () =>
          import('./features/auth/login/login').then(c => c.Login),
      },
    ],
  },

  {
    path: '',
    loadComponent: () =>
      import('./layout/main-layout/main-layout').then(c => c.MainLayout),
    children: [
      {
        path: 'home',
        loadComponent: () => import('./features/home/home')
          .then(c => c.Home)
      }
    ],
  },
  {path: '**', redirectTo: 'login'}
];
