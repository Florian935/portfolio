import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemePickerService {

  themeColor: string = 'light';
  private _theme = new Subject<string>();
  theme$ = this._theme.asObservable();

  constructor() {}

  setTheme(theme: string): void {
    this.themeColor = theme;
    this._theme.next(theme);
  }
}
