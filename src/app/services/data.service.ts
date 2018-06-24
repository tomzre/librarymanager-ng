import { BadRequestError } from './../common/bad-request-error';
import { AppError } from './../common/app-error';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';
import { Observable } from 'rxjs/internal/Observable';
import { NotFoundError } from '../common/not-found-error';
import { throwError } from 'rxjs/internal/observable/throwError';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private url: string,
    private http: HttpClient) { }

  getById(id) {
    return this.http.get(this.url + '/' + id)
      .pipe(catchError(this.handleError));
  }

  getAll() {
      return this.http.get(this.url)
        .pipe(catchError(this.handleError));
      }

  create(body) {
    this.http.post(this.url, body)
      .pipe(catchError(this.handleError));
    }

  delete(id: number) {
    // logic goes here
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