import { Routes } from '@angular/router';
import { adminGuard } from './guards/admin.guard';


export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./layouts/front-office/front-office.routes').then(m => m.frontOfficeRoutes),
  },
  {
    path: 'back-office',
    loadChildren: () =>
      import('./layouts/back-office/back-office.routes').then(m => m.backOfficeRoutes)
  },
  { path: '**', redirectTo: '' }
];
