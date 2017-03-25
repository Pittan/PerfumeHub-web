import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class HeaderService {

  public title: BehaviorSubject<string> = new BehaviorSubject<string>(null);

  constructor() { }

  setTitle(value: string) {
    this.title.next(value);
  }

}
