import { ThemePickerService } from '../../../services/ui/theme-picker.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss']
})
export class ThemeComponent implements OnInit {

  constructor(private themePicker: ThemePickerService) {}

  ngOnInit(): void {}

  changeTheme(theme: string) {
    this.themePicker.setTheme(theme);
  }
}
