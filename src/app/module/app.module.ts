import { ObsotrackerComponent } from './../component/stage/obsotracker/obsotracker.component';
import { GsbAndroidComponent } from './../component/ppe/gsb-android/gsb-android.component';
import { ParticlesDirective } from './../core/directives/particles.directive';
import { GsbWebComponent } from '../component/ppe/gsb-web/gsb-web.component';
import { ProfilComponent } from './../component/profil/profil.component';
import { ThemePickerService } from './../core/services/theme-picker.service';
import { ThemeComponent } from '../component/header/theme/theme.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from '../component/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../component/header/header.component';
import { FooterComponent } from '../component/footer/footer.component';
import { WelcomeComponent } from '../component/welcome/welcome.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProfilSkillComponent } from '../component/profil/profil-skill/profil-skill.component';
import { SkillService } from '../services/skill.service';
import { CommonModule } from '@angular/common';
import { DialogProfilSkillComponent } from '../component/profil/dialog-profil-skill/dialog-profil-skill.component';
import { CassandiaComponent } from '../component/stage/cassandia/cassandia.component';
import { VeilleComponent } from '../component/veille/veille.component';

@NgModule({
  declarations: [
    AppComponent,
    ThemeComponent,
    GsbWebComponent,
    GsbAndroidComponent,
    ObsotrackerComponent,
    HeaderComponent,
    FooterComponent,
    WelcomeComponent,
    ParticlesDirective,
    ProfilComponent,
    ProfilSkillComponent,
    DialogProfilSkillComponent,
    CassandiaComponent,
    VeilleComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    OverlayModule,
    MaterialModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [
    ThemePickerService,
    SkillService
  ],
  bootstrap: [
    AppComponent
  ],
  entryComponents: [
    DialogProfilSkillComponent
  ]
})
export class AppModule { }
