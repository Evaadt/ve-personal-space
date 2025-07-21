import { Routes } from '@angular/router';

import { FrontOfficeComponent } from './front-office.component';
import { ContactComponent } from '../../pages/front-office/contact/contact.component';
import { HomeComponent } from '../../pages/front-office/home/home.component';
import { ProjectsComponent } from '../../pages/front-office/projects/projects.component';
import { PublicationsComponent } from '../../pages/front-office/publications/publications.component';
import { SessionsComponent } from '../../pages/front-office/sessions/sessions.component';
import { SobreComponent } from '../../pages/front-office/sobre/sobre.component';


export const frontOfficeRoutes: Routes = [
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
  }
];
