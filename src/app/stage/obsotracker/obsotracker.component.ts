import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-obsotracker',
  templateUrl: './obsotracker.component.html',
  styleUrls: ['./obsotracker.component.scss']
})
export class ObsotrackerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

}
