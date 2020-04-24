import { Observable } from 'rxjs';
import { ThemePickerService } from '../core/services/theme-picker.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  isDarkTheme: Observable<boolean>;
  theme: Observable<string>;
  themeColor: string;

  constructor(private themePicker: ThemePickerService) { }

  ngOnInit(): void {
    this.isDarkTheme = this.themePicker.isDarkTheme;
    this.theme = this.themePicker.theme;
    this.themePicker.theme.subscribe(
      (theme) => this.themeColor = theme
    );
  }
}
