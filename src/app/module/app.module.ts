import { OverlayModule, OVERLAY_PROVIDERS } from '@angular/cdk/overlay';
import { ColorPickerService } from './../core/services/color-picker.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from '../component/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    OverlayModule,
  ],
  providers: [
    ColorPickerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
