import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondTileComponent } from './second-tile.component';

describe('SecondTileComponent', () => {
  let component: SecondTileComponent;
  let fixture: ComponentFixture<SecondTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
