import { OverlayContainer } from '@angular/cdk/overlay';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColorPickerService {

  colorClass: BehaviorSubject<string> = new BehaviorSubject('light');

  constructor(private overlayContainer: OverlayContainer) {
    overlayContainer.getContainerElement().classList.add('light');
  }

  getColorClass() {
    return this.colorClass;
  }

  setColorClass(className: string) {
    this.overlayContainer.getContainerElement().classList.forEach(css => {
      this.overlayContainer.getContainerElement().classList.remove(css);
    });
    this.overlayContainer.getContainerElement().classList.add(className);
    this.colorClass.next(className);
  }
}
