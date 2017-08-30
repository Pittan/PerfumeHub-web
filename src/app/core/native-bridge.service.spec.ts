import { TestBed, inject } from '@angular/core/testing';

import { NativeBridgeService } from './native-bridge.service';

describe('NativeBridgeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NativeBridgeService]
    });
  });

  it('should be created', inject([NativeBridgeService], (service: NativeBridgeService) => {
    expect(service).toBeTruthy();
  }));
});
