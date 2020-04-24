import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemePickerService {

  private _darkTheme = new Subject<boolean>();
  isDarkTheme = this._darkTheme.asObservable();

  private _theme = new Subject<string>();
  theme = this._theme.asObservable();

  constructor() {}

  setDarkTheme(isDarkTheme: boolean): void {
    this._darkTheme.next(isDarkTheme);
  }

  setTheme(theme: string): void {
    this._theme.next(theme);
  }
}
