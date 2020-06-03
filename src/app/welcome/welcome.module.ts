import { MatButtonModule } from '@angular/material/button';
import { WelcomeComponent } from './welcome.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeRoutingModule } from '@welcome/welcome-routing.module';
import { ParticlesDirective } from '@shared/directives/particles.directive';
import { SkillService } from '@profilservices/skill.service';

@NgModule({
  declarations: [
    WelcomeComponent,
    ParticlesDirective
  ],
  imports: [
    CommonModule,
    WelcomeRoutingModule,
    MatButtonModule,
  ],
})
export class WelcomeModule { }
