import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPerfumeHubComponent } from './about-perfume-hub.component';

describe('AboutPerfumeHubComponent', () => {
  let component: AboutPerfumeHubComponent;
  let fixture: ComponentFixture<AboutPerfumeHubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutPerfumeHubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutPerfumeHubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
