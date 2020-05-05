import { ThemePickerService } from '../../../core/services/theme-picker.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss']
})
export class ThemeComponent implements OnInit {

  isDarkTheme: Observable<boolean>;
  theme: string;

  constructor(private themePicker: ThemePickerService) {}

  ngOnInit(): void {
    this.isDarkTheme = this.themePicker.isDarkTheme;
  }

  toggleDarkTheme(checked: boolean) {
    this.themePicker.setDarkTheme(checked);
  }

  changeTheme(theme: string) {
    this.themePicker.setTheme(theme);
  }
}
