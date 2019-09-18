import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ChuckNorris } from '../shared/chuck-norris';
import { catchError } from 'rxjs/operators';
import { error } from 'util';


@Injectable()
export class ChuckNorrisService {

  constructor(private http: HttpClient) { }

  readonly checkNorrisUrl  = 'http://api.icndb.com/jokes/random/5';

  getChuckNorris(): Observable<ChuckNorris[]> {

    return this.http.get<ChuckNorris[]>(this.checkNorrisUrl, {})
    .pipe(catchError(this.handleError('getChuckNorris', [])));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    // tslint:disable-next-line:no-shadowed-variable
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
