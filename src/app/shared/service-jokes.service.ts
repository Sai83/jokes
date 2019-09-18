import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Jokes } from './jokes';

@Injectable()
export class ServiceJokesService {
  configUrl = 'https://official-joke-api.appspot.com/jokes/ten';

constructor(private httpClient: HttpClient) {}

getJokes(): Observable<Jokes[]> {
  return this.httpClient.get<Jokes[]>(this.configUrl)
  .pipe(catchError(this.handleError('getEvents', [])));


}




private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
    console.error(error);
    return of(result as T);

  };

}
}


