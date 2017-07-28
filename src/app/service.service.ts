import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class ServiceService {

  variable: string;
  var_search: string;

  baseurl: string = 'https://api.github.com/users/';
  baseurl_search: string='https://api.github.com/search/repositories?q='
  constructor(public httpService: Http) { }

  setData(data) {
    this.variable = data;
  }

  setData_search(data) {
    this.var_search = data;
  }

  getUserDetails(): Observable<any> {

    return this.httpService.get(this.baseurl + this.variable).map(
      res => res.json()
    );
  }
  getProjectDetails(): Observable<any> {

    return this.httpService.get(this.baseurl_search + this.var_search).map(
      res => res.json()
    );
  }

}
