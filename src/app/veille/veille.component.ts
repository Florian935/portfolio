import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-veille',
  templateUrl: './veille.component.html',
  styleUrls: ['./veille.component.scss']
})
export class VeilleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}
