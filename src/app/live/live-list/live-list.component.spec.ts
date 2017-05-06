import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveListComponent } from './live-list.component';

describe('LiveListComponent', () => {
  let component: LiveListComponent;
  let fixture: ComponentFixture<LiveListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
