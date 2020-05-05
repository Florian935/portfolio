import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObsotrackerComponent } from './obsotracker.component';

describe('ThirdTileComponent', () => {
  let component: ObsotrackerComponent;
  let fixture: ComponentFixture<ObsotrackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObsotrackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObsotrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
