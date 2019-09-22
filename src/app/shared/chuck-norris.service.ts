import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { IChuckNorris } from '../shared/chuck-norris';
import { catchError, map } from 'rxjs/operators';
import { IChuckNorrisChild } from './chuck-norris-child';
// import {map} from 'rxjs/Rx';



@Injectable()
export class ChuckNorrisService {

  constructor(private http: HttpClient) { }

  readonly checkNorrisUrl  = 'http://api.icndb.com/jokes/random/5';

  getChuckNorris(): Observable<IChuckNorris[]> {

    return this.http.get(this.checkNorrisUrl, {}).pipe(
      map((data: IChuckNorris) => {
        const transformedData = Object.keys(data).map(key => data[key]);
        return transformedData;
      }),
      catchError(this.handleError('getChuckNorris', []))
    );

  }

  private handleError<T>(operation = 'operation', result?: T) {
    // tslint:disable-next-line:no-shadowed-variable
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
