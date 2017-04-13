import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class HeaderService {

  public title: BehaviorSubject<string> = new BehaviorSubject<string>(null);

  public isMenuOpen: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  setTitle(value: string) {
    this.title.next(value);
  }

  setIsMenuOpen(state: boolean) {
    this.isMenuOpen.next(state);
  }

}
