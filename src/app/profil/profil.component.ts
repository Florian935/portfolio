import { Component, OnInit } from '@angular/core';
import { SkillService } from 'src/app/profil/services/skill.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

  skills: any;

  constructor(
    private _skillService: SkillService,
    ) { }

  ngOnInit(): void {
    this.skills = this._skillService.skills;
    window.scrollTo(0, 0);
  }
}
