import {Injectable} from '@angular/core';
import {Http, Response}          from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {AuthHttp} from 'angular2-jwt';


import {Item} from "./models/Item";

@Injectable()
export class RestService {

  constructor(private authHttp: AuthHttp) {
  }

  baseURL = "http://localhost:4000/items";
  getItems(): Observable<Item[]> {
    let output$ = this.authHttp.get(this.baseURL)
      .map(res => res.json())
      .catch(this.handleError);
    return output$;
  }

  private handleError(error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
