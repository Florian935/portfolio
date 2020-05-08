import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VeilleComponent } from './veille.component';


const routes: Routes = [
{
  path: '',
  component: VeilleComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VeilleRoutingModule { }
