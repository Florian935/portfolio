import { RouterModule } from '@angular/router';
import { CassandiaComponent } from 'src/app/stage/cassandia/cassandia.component';
import { ObsotrackerComponent } from './stage/obsotracker/obsotracker.component';
import { GsbAndroidComponent } from './ppe/gsb-android/gsb-android.component';
import { GsbWebComponent } from './ppe/gsb-web/gsb-web.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SkillService } from './profil/services/skill.service';
import { CommonModule } from '@angular/common';
import { VeilleComponent } from './veille/veille.component';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    GsbWebComponent,
    GsbAndroidComponent,
    ObsotrackerComponent,
    CassandiaComponent,
    VeilleComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    OverlayModule,
    FormsModule,
    FontAwesomeModule,
    CoreModule,
  ],
  providers: [
    SkillService
  ],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule { }
