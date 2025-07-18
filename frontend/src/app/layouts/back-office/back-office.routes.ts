import { Routes } from '@angular/router';
import { BackOfficeComponent } from './back-office.component';
import { LoginBackofficeComponent } from '../../login-backoffice/login-backoffice.component';

export const backOfficeRoutes: Routes = [
  {
    path: '',
    component: BackOfficeComponent,
    children: [
      { path: 'login', component: LoginBackofficeComponent }
    //  { path: '', component: LoginBackofficeComponent }
      // outras rotas protegidas do backoffice
    ]
  }
];
