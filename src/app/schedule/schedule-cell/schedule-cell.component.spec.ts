import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleCellComponent } from './schedule-cell.component';

describe('ScheduleCellComponent', () => {
  let component: ScheduleCellComponent;
  let fixture: ComponentFixture<ScheduleCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
