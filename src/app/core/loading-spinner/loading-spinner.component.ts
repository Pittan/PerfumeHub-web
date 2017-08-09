import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { LoadingSpinnerService } from './loading-spinner.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'ph-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.styl'],
  animations: [
    trigger('enterAnimation', [
      state('inactive', style({
        opacity: 0
      })),
      state('active',   style({
        opacity: 1
      })),
      transition('inactive => active', animate('200ms ease-in-out')),
      transition('active => inactive', animate('200ms ease-in-out'))
    ])
  ]
})
export class LoadingSpinnerComponent implements OnInit, OnDestroy {

  spinnerState = 'inactive';
  @HostBinding('style.display') showSpinnerContainer = 'none';

  private subscription = new Subscription();

  constructor(private spinnerService: LoadingSpinnerService) { }

  ngOnInit() {
    this.spinnerService.showSpinner.subscribe(state => {
      // this.showSpinner = state;
      this.spinnerState = state ? 'active' : 'inactive';
      if (state) {
        this.showSpinnerContainer = 'block';
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onAnimeDone() {
    this.showSpinnerContainer = this.spinnerState === 'active' ? 'block' : 'none';
  }

}
