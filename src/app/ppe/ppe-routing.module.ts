import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GsbWebComponent } from './gsb-web/gsb-web.component';
import { GsbAndroidComponent } from './gsb-android/gsb-android.component';


const routes: Routes = [
  {
    path: 'gsb-appli-web',
    component: GsbWebComponent
  },
  {
    path: 'gsb-appli-android',
    component: GsbAndroidComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PpeRoutingModule { }
