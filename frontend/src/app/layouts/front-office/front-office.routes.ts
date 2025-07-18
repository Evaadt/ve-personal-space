import { Routes } from '@angular/router';
import { FrontOfficeComponent } from './front-office.component';

import { HomeComponent } from '../../pages/home/home.component';
import { SobreComponent } from '../../pages/sobre/sobre.component';
import { SessionsComponent } from '../../pages/sessions/sessions.component';
import { PublicationsComponent } from '../../pages/publications/publications.component';
import { ProjectsComponent } from '../../pages/projects/projects.component';
import { ContactComponent } from '../../pages/contact/contact.component';

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
