import { ParticlesDirective } from './../core/directives/particles.directive';
import { ThirdTileComponent } from './../component/third-tile/third-tile.component';
import { SecondTileComponent } from './../component/second-tile/second-tile.component';
import { ProfilComponent } from './../component/profil/profil.component';
import { ThemePickerService } from './../core/services/theme-picker.service';
import { ThemeComponent } from './../component/theme/theme.component';
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

@NgModule({
  declarations: [
    AppComponent,
    ThemeComponent,
    SecondTileComponent,
    ThirdTileComponent,
    HeaderComponent,
    FooterComponent,
    WelcomeComponent,
    ParticlesDirective,
    ProfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    OverlayModule,
    MaterialModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [
    ThemePickerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
