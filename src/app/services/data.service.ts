import { Injectable } from '@angular/core';
//import { Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';



import { DATA } from './mock-data';
import { Observable } from 'rxjs';

import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';


@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }

  getData(): Promise<any> {
    return Promise.resolve(DATA);
  }

  getRemoteData(url): Observable<any> {
    return this.http.get(url).pipe(map(this.extractData), catchError(this.handleError));
  }

  private extractData(res: Response) {
    const body = res.json();
    return body || { };
  }

  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return throwError(errMsg);
  }

}
