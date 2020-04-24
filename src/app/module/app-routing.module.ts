import { ProfilComponent } from './../component/profil/profil.component';
import { ThirdTileComponent } from './../component/third-tile/third-tile.component';
import { SecondTileComponent } from './../component/second-tile/second-tile.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from '../component/welcome/welcome.component';


const routes: Routes = [
  { path: 'accueil', component: WelcomeComponent },
  { path: 'profil', component: ProfilComponent },
  { path: 'second-tile', component: SecondTileComponent },
  { path: 'third-tile', component: ThirdTileComponent },
  { path: '**', redirectTo: 'accueil' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
