import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gsb-web',
  templateUrl: './gsb-web.component.html',
  styleUrls: ['./gsb-web.component.scss']
})
export class GsbWebComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

}
