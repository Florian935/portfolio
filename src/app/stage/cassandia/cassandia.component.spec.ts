import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CassandiaComponent } from './cassandia.component';

describe('CassandiaComponent', () => {
  let component: CassandiaComponent;
  let fixture: ComponentFixture<CassandiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CassandiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CassandiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
