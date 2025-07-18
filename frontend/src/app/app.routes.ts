import { Routes } from '@angular/router';
import { adminGuard } from './guards/admin.guard';

import { BackOfficeComponent } from './layouts/back-office/back-office.component';
import { FrontOfficeComponent } from './layouts/front-office/front-office.component';
import { LoginBackofficeComponent } from './login-backoffice/login-backoffice.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { PublicationsComponent } from './pages/publications/publications.component';
import { SessionsComponent } from './pages/sessions/sessions.component';
import { SobreComponent } from './pages/sobre/sobre.component';


export const routes: Routes = [
  {
    path: '',
    component: FrontOfficeComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'sobre', component: SobreComponent },
      { path: 'perfil', component: SobreComponent },
      { path: 'aulas', component: SessionsComponent },
      { path: 'publicacoes', component: PublicationsComponent },
      { path: 'projetos', component: ProjectsComponent },
      { path: 'contato', component: ContactComponent },
    ]
  },
  {
    path: '',
    component: BackOfficeComponent,
    children: [
      { path: 'login-office', component: LoginBackofficeComponent}
    ]
  },
  { path: '**', redirectTo: '' }
];
