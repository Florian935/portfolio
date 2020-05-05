import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogProfilSkillComponent } from './dialog-profil-skill.component';

describe('DialogProfilSkillComponent', () => {
  let component: DialogProfilSkillComponent;
  let fixture: ComponentFixture<DialogProfilSkillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogProfilSkillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogProfilSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
