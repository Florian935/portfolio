import { CassandiaComponent } from 'src/app/stage/cassandia/cassandia.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StageRoutingModule } from './stage-routing.module';
import { ObsotrackerComponent } from './obsotracker/obsotracker.component';


@NgModule({
  declarations: [
    CassandiaComponent,
    ObsotrackerComponent
  ],
  imports: [
    CommonModule,
    StageRoutingModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule
  ]
})
export class StageModule { }
