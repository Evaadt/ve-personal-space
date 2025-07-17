import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { AulasComponent } from './pages/aulas/aulas.component';
import { PublicacoesComponent } from './pages/publicacoes/publicacoes.component';
import { ContatoComponent } from './pages/contato/contato.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'aulas', component: AulasComponent },
  { path: 'publicacoes', component: PublicacoesComponent },
  { path: 'contato', component: ContatoComponent },
  { path: '**', redirectTo: '' }
];
