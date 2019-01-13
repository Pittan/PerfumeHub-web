import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoColumnContainerComponent } from './two-column-container.component';

describe('TwoColumnContainerComponent', () => {
  let component: TwoColumnContainerComponent;
  let fixture: ComponentFixture<TwoColumnContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoColumnContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoColumnContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
