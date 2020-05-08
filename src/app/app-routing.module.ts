import { VeilleComponent } from './veille/veille.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'profil',
    loadChildren: () => import('./profil/profil.module').then(m => m.ProfilModule)
  },
  {
    path: 'accueil',
    loadChildren: () => import('./welcome/welcome.module').then(m => m.WelcomeModule)
  },
  { path: 'ppe',
    loadChildren: () => import('./ppe/ppe.module').then(m => m.PpeModule)
  },
  { path: 'stage',
    loadChildren: () => import('./stage/stage.module').then(m => m.StageModule)
  },
  {
    path: 'veille',
    loadChildren: () => import('./veille/veille.module').then(m => m.VeilleModule)
  },
  { path: '**', redirectTo: 'accueil' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
