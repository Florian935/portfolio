import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilRoutingModule } from './profil-routing.module';
import { ProfilComponent } from './profil.component';
import { ProfilSkillComponent } from './profil-skill/profil-skill.component';
import { DialogProfilSkillComponent } from './profil-skill/dialog-profil-skill/dialog-profil-skill.component';


@NgModule({
  declarations: [
    ProfilComponent,
    ProfilSkillComponent,
    DialogProfilSkillComponent
  ],
  imports: [
    CommonModule,
    ProfilRoutingModule,
    MatDividerModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatCardModule
  ],
  entryComponents: [
    DialogProfilSkillComponent
  ]
})
export class ProfilModule { }
