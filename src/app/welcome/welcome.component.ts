import { Component, OnInit } from '@angular/core';
import { SkillService } from '@profilservices/skill.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  number = 100;

  constructor() { }

  ngOnInit(): void {
  }
}
