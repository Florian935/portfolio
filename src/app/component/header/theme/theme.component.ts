import { ThemePickerService } from '../../../shared/services/theme-picker/theme-picker.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss']
})
export class ThemeComponent implements OnInit {

  theme: string;

  constructor(private themePicker: ThemePickerService) {}

  ngOnInit(): void {}

  changeTheme(theme: string) {
    this.themePicker.setTheme(theme);
  }
}
