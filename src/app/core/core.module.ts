import { MaterialModule } from './../shared/material.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ThemeComponent } from './components/header/theme/theme.component';
import { ThemePickerService } from './services/ui/theme-picker.service';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    ThemeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    ThemeComponent,
    MaterialModule,
  ],
  providers: [
    ThemePickerService
  ]
})
export class CoreModule { }
