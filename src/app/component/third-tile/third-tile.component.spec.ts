import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdTileComponent } from './third-tile.component';

describe('ThirdTileComponent', () => {
  let component: ThirdTileComponent;
  let fixture: ComponentFixture<ThirdTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirdTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
