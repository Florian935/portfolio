import { ThemePickerService } from '@core/services/ui/theme-picker.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  themeColor: string;
  themeSubscription: Subscription;

  constructor(
    private _themePicker: ThemePickerService,
    ) { }

  ngOnInit(): void {
    this.themeSubscription = this._themePicker.theme$.subscribe(
      (theme: string) => this.themeColor = theme
    );
  }



  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
