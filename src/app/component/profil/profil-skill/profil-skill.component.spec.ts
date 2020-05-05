import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilSkillComponent } from './profil-skill.component';

describe('ProfilSkillComponent', () => {
  let component: ProfilSkillComponent;
  let fixture: ComponentFixture<ProfilSkillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilSkillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
