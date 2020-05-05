import { ObsotrackerComponent } from './stage/obsotracker/obsotracker.component';
import { GsbAndroidComponent } from './ppe/gsb-android/gsb-android.component';
import { ParticlesDirective } from '../shared/directives/particles.directive';
import { GsbWebComponent } from './ppe/gsb-web/gsb-web.component';
import { ProfilComponent } from './profil/profil.component';
import { ThemePickerService } from '../shared/services/theme-picker/theme-picker.service';
import { ThemeComponent } from './header/theme/theme.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../shared/material.module';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProfilSkillComponent } from './profil/profil-skill/profil-skill.component';
import { SkillService } from '../shared/services/skill/skill.service';
import { CommonModule } from '@angular/common';
import { DialogProfilSkillComponent } from './profil/dialog-profil-skill/dialog-profil-skill.component';
import { CassandiaComponent } from './stage/cassandia/cassandia.component';
import { VeilleComponent } from './veille/veille.component';
import { CoreModule } from '../core/core.module';

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
    FontAwesomeModule,
    CoreModule
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
