import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneColumnContainerComponent } from './one-column-container.component';

describe('OneColumnContainerComponent', () => {
  let component: OneColumnContainerComponent;
  let fixture: ComponentFixture<OneColumnContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneColumnContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneColumnContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
