import { SkillService } from './services/skill.service';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilRoutingModule } from '@profil/profil-routing.module';
import { ProfilComponent } from '@profil/profil.component';
import { ProfilSkillComponent } from '@profil/profil-skill/profil-skill.component';
import { DialogProfilSkillComponent } from '@profil/profil-skill/dialog-profil-skill/dialog-profil-skill.component';
import { MatDialogModule } from '@angular/material/dialog';


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
    MatCardModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [
    SkillService
  ],
  entryComponents: [
    DialogProfilSkillComponent
  ]
})
export class ProfilModule { }
