import { ThemePickerService } from '../../../core/services/ui/theme-picker.service';
import { Observable } from 'rxjs';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog-profil-skill',
  templateUrl: './dialog-profil-skill.component.html',
  styleUrls: ['./dialog-profil-skill.component.scss']
})
export class DialogProfilSkillComponent implements OnInit {

  theme: Observable<string>;
  themeColor: string;

  constructor(
    public dialogRef: MatDialogRef<DialogProfilSkillComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private themePicker: ThemePickerService,
    private router: Router) { }

  ngOnInit(): void {
    this.themeColor = this.themePicker.themeColor;
  }

  onClose(): void {
    this.dialogRef.close();
  }

  onClickProject(projet: string): void {
    this.onClose();
    this.router.navigate([projet]);
  }
}
