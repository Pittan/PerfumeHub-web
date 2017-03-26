import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';

import { environment } from '../environments/environment';
import { User } from './user';


@Injectable()
export class UserService {

  constructor(private http: Http) { }

  getUser() {
    const options = new RequestOptions({ withCredentials: true });
    return this.http.get(environment.endpoint + 'user/', options)
      .map(res => {
        if (res.json().name) {
          return res.json() as User;
        }
        return null;
      });
  }

  login(destination?: string) {
    let url =  environment.endpoint + 'auth/';
    if (destination) {
      url += '?redirect_url=' + destination;
    }
    window.location.href = url;
  }

  logout(destination?: string) {
    let url =  environment.endpoint + 'auth/logout';
    if (destination) {
      url += '?redirect_url=' + destination;
    }
    window.location.href = url;
  }

}
