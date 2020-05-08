import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PpeRoutingModule } from './ppe-routing.module';
import { GsbAndroidComponent } from './gsb-android/gsb-android.component';
import { GsbWebComponent } from './gsb-web/gsb-web.component';


@NgModule({
  declarations: [
    GsbAndroidComponent,
    GsbWebComponent
  ],
  imports: [
    CommonModule,
    PpeRoutingModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule
  ]
})
export class PpeModule { }
