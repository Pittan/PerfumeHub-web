import { TestBed, inject } from '@angular/core/testing';

import { LiveService } from './live.service';

describe('LiveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LiveService]
    });
  });

  it('should ...', inject([LiveService], (service: LiveService) => {
    expect(service).toBeTruthy();
  }));
});
