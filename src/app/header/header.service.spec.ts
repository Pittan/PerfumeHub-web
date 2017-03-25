import { TestBed, inject } from '@angular/core/testing';

import { HeaderService } from './header.service';

fdescribe('HeaderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeaderService]
    });
  });

  it('should ...', inject([HeaderService], (service: HeaderService) => {
    expect(service).toBeTruthy();
  }));
});