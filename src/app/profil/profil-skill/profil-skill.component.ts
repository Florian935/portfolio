import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogProfilSkillComponent } from './dialog-profil-skill/dialog-profil-skill.component';

@Component({
  selector: 'app-profil-skill',
  templateUrl: './profil-skill.component.html',
  styleUrls: ['./profil-skill.component.scss'],
})
export class ProfilSkillComponent implements OnInit {

  @Input()
  langage: string;

  @Input()
  pourcentage: number;

  @Input()
  skill: any;

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogProfilSkillComponent, {
      width: '55%',
      height: '75%',
      data: this.skill,
      autoFocus: false
    });
  }
}
