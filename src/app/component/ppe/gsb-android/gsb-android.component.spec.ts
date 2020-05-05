import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GsbAndroidComponent } from './gsb-android.component';

describe('GsbAndroidComponent', () => {
  let component: GsbAndroidComponent;
  let fixture: ComponentFixture<GsbAndroidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GsbAndroidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GsbAndroidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
