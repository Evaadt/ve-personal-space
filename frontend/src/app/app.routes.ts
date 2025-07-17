import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { SessionsComponent } from './pages/sessions/sessions.component';
import { PublicationsComponent } from './pages/publications/publications.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProjectsComponent } from './pages/projects/projects.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'aulas', component: SessionsComponent },
  { path: 'publicacoes', component: PublicationsComponent },
  { path: 'projetos', component: ProjectsComponent },
  { path: 'contato', component: ContactComponent },
  { path: '**', redirectTo: '' }
];
