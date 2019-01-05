import { TestBed, inject } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';
import { UserService } from './user.service';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import {of } from 'rxjs';

describe('AuthGuard', () => {

  let service: AuthGuard;
  const next = new ActivatedRouteSnapshot();
  const state = jasmine.createSpyObj('RouterStateSnapshot', ['toString']);
  const router = {
    navigate: jasmine.createSpy('navigate')
  };

  let userResult: any = of({
    screen_name: 'foo',
    id: '123',
    image_url: 'abc',
    name: 'foo',
    permission: 'user',
    twitter_id: 'pittanko_pta'
  });

  const userService = {
    getUser: jasmine.createSpy('getUser').and.returnValue(userResult)
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGuard,
        {provide: UserService, useValue: userService},
        {provide: Router, useValue: router}
      ]
    });
    service = TestBed.get(AuthGuard);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should activate page' , () => {
    const result =  service.canActivate(next, state);
    result.subscribe(
        res => { expect(res).toBe(true); }
    );
  });

  it('should activate page with false' , () => {
    userResult = of(null);
    userService.getUser.and.returnValue(userResult);
    const result = service.canActivate(next, state);
    result.subscribe(
        res => { expect(res).toBe(false); }
    );
  });

  // TODO canLoadのテストが書けたら書く
});
