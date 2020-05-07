import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gsb-android',
  templateUrl: './gsb-android.component.html',
  styleUrls: ['./gsb-android.component.scss']
})
export class GsbAndroidComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

}
