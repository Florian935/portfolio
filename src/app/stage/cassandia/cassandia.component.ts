import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cassandia',
  templateUrl: './cassandia.component.html',
  styleUrls: ['./cassandia.component.scss']
})
export class CassandiaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

}
