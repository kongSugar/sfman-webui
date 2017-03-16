import {Injectable}              from '@angular/core';
import {Http, Response}          from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import {User} from "./User";

@Injectable()
export class LagerService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/users'
  private output;

  constructor(private http: Http) {
  }

  getUsers(): Observable<User[]> {
    let output$ = this.http.get(this.apiUrl)
    //.map(this.extractData)
      .map(res => <User[]>res.json())
      .catch(this.handleError);
    console.log("Out: " + output$);
    return output$;
  }

  private mapUsers(res: Response) {
    return res.json().data;
  }

  private extractData(res: Response) {
    let body = res.json();
    console.log(body);
    return body.data || {};
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
