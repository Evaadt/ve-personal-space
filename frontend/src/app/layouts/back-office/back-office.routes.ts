import { Routes } from '@angular/router';

import { BackOfficeComponent } from './back-office.component';
import { LoginBackofficeComponent } from '../../login-backoffice/login-backoffice.component';
import { DashboardComponent } from '../../pages/back-office/dashboard/dashboard.component';

export const backOfficeRoutes: Routes = [
  {
    path: '',
    component: BackOfficeComponent,
    children: [
      { path: 'login', component: LoginBackofficeComponent },
      { path: 'home', component: DashboardComponent }
      //  { path: '', component: LoginBackofficeComponent }
      // outras rotas protegidas do backoffice
    ]
  }
];
