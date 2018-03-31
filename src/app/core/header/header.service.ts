import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/filter';
import { NavigationStart, Router } from '@angular/router';

@Injectable()
export class HeaderService {

  public title: BehaviorSubject<string> = new BehaviorSubject<string>(null);

  public isMenuOpen: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  public color: BehaviorSubject<string> = new BehaviorSubject<string>('#489BC6');

  constructor(private router: Router) {
    router.events
      .filter(event => event instanceof NavigationStart)
      .subscribe((event: NavigationStart) => {
        this.isMenuOpen.next(false);
      });
  }

  setTitle(value: string) {
    this.title.next(value);
  }

  setIsMenuOpen(state: boolean) {
    this.isMenuOpen.next(state);
  }

  setColor(color: string) {
    this.color.next('#' + color);
  }

}
