import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VeilleRoutingModule } from '@veille/veille-routing.module';
import { VeilleComponent } from '@veille/veille.component';


@NgModule({
  declarations: [
    VeilleComponent
  ],
  imports: [
    CommonModule,
    VeilleRoutingModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule
  ]
})
export class VeilleModule { }
