import { Observable, Subscription } from 'rxjs';
import { ThemePickerService } from '../shared/services/theme-picker/theme-picker.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  themeColor: string;

  constructor(private _themePicker: ThemePickerService) { }

  ngOnInit(): void {
    this._themePicker.theme$.subscribe(
      (theme) => this.themeColor = theme
    );
  }
}
