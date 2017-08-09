import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class LoadingSpinnerService {

  public showSpinner: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public description: BehaviorSubject<string> = new BehaviorSubject('Loading');

  constructor() { }

  /**
   * ローディングスピナーを表示します
   */
  show() {
    this.showSpinner.next(true);
    console.log('show');
  }

  /**
   * ローディングスピナーを非表示にします
   */
  hide() {
    this.showSpinner.next(false);
    console.log('hide');
  }

  /**
   * スピナーの下に表示する説明文を変更します
   * @param description
   */
  setDescription(description: string) {
    this.description.next(description)
  }

}
