import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GsbWebComponent } from './gsb-web.component';

describe('SecondTileComponent', () => {
  let component: GsbWebComponent;
  let fixture: ComponentFixture<GsbWebComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GsbWebComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GsbWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
