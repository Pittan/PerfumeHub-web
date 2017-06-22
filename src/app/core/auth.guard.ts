import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot } from '@angular/router';
import { UserService } from './user.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {

  constructor(private userService: UserService,
              private router: Router) { }

    /**
     * LazyLoadingなModuleをLoadさせる前に
     * 読み込みしていいかチェックするGuard
     * @param route
     * @returns {Observable<R>}
     */
  canLoad(route: Route): boolean|Observable<boolean> {
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

    /**
     * コンポーネントをActivateできるか
     * チェックするGuard
     * @param route
     * @param state
     * @returns {Observable<R>}
     */
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
