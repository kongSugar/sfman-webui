import {Injectable} from '@angular/core';
import {Http, Response}          from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import {Item} from "./models/Item";

@Injectable()
export class RestService {

  constructor(private http: Http) {
  }

  getItems(): Observable<Item[]> {
    let output$ = this.http.get('assets/MOCKAROO.json')
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
