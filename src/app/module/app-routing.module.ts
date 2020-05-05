import { VeilleComponent } from './../component/veille/veille.component';
import { GsbAndroidComponent } from '../component/ppe/gsb-android/gsb-android.component';
import { ProfilComponent } from './../component/profil/profil.component';
import { GsbWebComponent } from '../component/ppe/gsb-web/gsb-web.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from '../component/welcome/welcome.component';
import { ObsotrackerComponent } from '../component/stage/obsotracker/obsotracker.component';
import { CassandiaComponent } from '../component/stage/cassandia/cassandia.component';

const routes: Routes = [
  { path: 'accueil', component: WelcomeComponent },
  { path: 'profil', component: ProfilComponent },
  { path: 'ppe/gsb-appli-web', component: GsbWebComponent },
  { path: 'ppe/gsb-appli-android', component: GsbAndroidComponent },
  { path: 'stage/obsotracker', component: ObsotrackerComponent },
  { path: 'stage/cassandia', component: CassandiaComponent },
  { path: 'veille', component: VeilleComponent},
  { path: '**', redirectTo: 'accueil' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
