import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Route, Router, RouterStateSnapshot } from '@angular/router';
import { UserService } from './user.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuardService {

  constructor(private userService: UserService,
              private router: Router) { }

  canLoad(route: Route): boolean|Observable<boolean>{
    return this.userService.getUser()
      .map(data => {
        if (data) {
          return true;
        } else {
          console.log('not authenticated');
          // TODO ここでダイアログを出したい

          // 一旦Scheduleに飛ばす
          this.router.navigate(['/schedule']);
          return false;
        }
      });
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.userService.getUser()
      .map( data => {
        if (data) {
          return true;
        } else {
          // TODO ここでダイアログを出したい

          // 一旦Scheduleに飛ばす
          this.router.navigate(['/']);
          return false;
        }
      });
  }

}
