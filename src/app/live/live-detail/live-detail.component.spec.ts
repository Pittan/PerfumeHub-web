import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveDetailComponent } from './live-detail.component';

describe('LiveDetailComponent', () => {
  let component: LiveDetailComponent;
  let fixture: ComponentFixture<LiveDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
