import { BadRequestError } from './../common/bad-request-error';
import { AppError } from './../common/app-error';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';
import { Observable } from 'rxjs/internal/Observable';
import { NotFoundError } from '../common/not-found-error';
import { throwError } from 'rxjs/internal/observable/throwError';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Access-Control-Allow-Origin' : '*'
    })
  };

  constructor(private url: string,
    private http: HttpClient) { }

  getById(id) {
    return this.http.get(this.url + '/' + id)
      .pipe(
        map(response => response),
        catchError(this.handleError)
    );
  }

  getAll() {
      return this.http.get(this.url)
        .pipe(
          map(response => response),
          catchError(this.handleError)
        );
      }

  create(resource) {
    return this.http.post(this.url, resource, this.httpOptions)
      .pipe(
        map(response => response),
        catchError(this.handleError)
      );
    }

update(resource, id: number) {
  return this.http.post(this.url + '/' + id, resource)
    .pipe(
      catchError(this.handleError)
    );
}

  delete(id: number) {
    return this.http.delete(this.url + '/' + id, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

    private handleError(error: Response) {
        if (error.status === 400) {
          return throwError(new BadRequestError(error));
        }
        if (error.status === 404) {
          return throwError(new NotFoundError(error));
        }
        return throwError(new AppError(error));

    }
}
