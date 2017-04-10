import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, URLSearchParams } from '@angular/http';
import { environment } from '../../environments/environment';

@Injectable()
export class ApiBaseService {

  constructor(private http: Http) { }

  get(path: string, param?: Object) {

    const query = new URLSearchParams();
    if (param) {
      Object.keys(param).forEach(function (key) {
        query.append(key, param[key]);
      });
    }

    const url = environment.endpoint + path;
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});
    const options = new RequestOptions({
      headers: headers,
      withCredentials: true,
      search: query
    });

    return this.http.get(url, options);
  }

  post(path: string, param?: Object) {
    const query = new URLSearchParams();
    if (param) {
      Object.keys(param).forEach(function (key) {
        query.append(key, param[key]);
      });
    }

    const url = environment.endpoint + path;
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});
    const options = new RequestOptions({
      headers: headers,
      withCredentials: true,
      search: query
    });

    return this.http.post(url, query, options);
  }

  put(path: string, param?: Object) {
    const query = new URLSearchParams();
    if (param) {
      Object.keys(param).forEach(function (key) {
        query.append(key, param[key]);
      });
    }

    const url = environment.endpoint + path;
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});
    const options = new RequestOptions({
      headers: headers,
      withCredentials: true,
      search: query
    });

    return this.http.put(url, query, options);
  }

  delete(path: string) {
    const url = environment.endpoint + path;
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});
    const options = new RequestOptions({
      headers: headers,
      withCredentials: true
    });

    return this.http.delete(url, options);
  }

}
