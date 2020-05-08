import { CassandiaComponent } from 'src/app/stage/cassandia/cassandia.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ObsotrackerComponent } from './obsotracker/obsotracker.component';


const routes: Routes = [
  {
    path: 'cassandia',
    component: CassandiaComponent
  },
  {
    path: 'obsotracker',
    component: ObsotrackerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StageRoutingModule { }
