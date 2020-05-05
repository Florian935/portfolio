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
  themeColor: string;

  constructor(private themePicker: ThemePickerService) { }

  ngOnInit(): void {
    this.isDarkTheme = this.themePicker.isDarkTheme;
    this.themePicker.theme.subscribe(
      (theme) => this.themeColor = theme
    );
  }
}
