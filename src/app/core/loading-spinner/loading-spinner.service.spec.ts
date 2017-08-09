import { TestBed, inject } from '@angular/core/testing';

import { LoadingSpinnerService } from './loading-spinner.service';

describe('LoadingSpinnerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoadingSpinnerService]
    });
  });

  it('should be created', inject([LoadingSpinnerService], (service: LoadingSpinnerService) => {
    expect(service).toBeTruthy();
  }));

  it('show / hide が正しく動作する', inject([LoadingSpinnerService], (service: LoadingSpinnerService) => {
    let spinnerState = false;
    service.showSpinner.subscribe(state => {
      spinnerState = state;
    });
    expect(spinnerState).toBeFalsy();
    service.show();
    expect(spinnerState).toBeTruthy();
    service.hide();
    expect(spinnerState).toBeFalsy();
  }));

  it('setDescription が正しく動作する', inject([LoadingSpinnerService], (service: LoadingSpinnerService) => {
    let spinnerDescription = '';
    service.description.subscribe(description => {
      spinnerDescription = description;
    });
    expect(spinnerDescription).toBe('Loading');
    service.setDescription('読み込み中');
    expect(spinnerDescription).toBe('読み込み中');
  }));
});
