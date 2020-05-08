import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PpeRoutingModule } from '@ppe/ppe-routing.module';
import { GsbWebComponent } from '@ppe/gsb-web/gsb-web.component';
import { GsbAndroidComponent } from '@ppe/gsb-android/gsb-android.component';


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
