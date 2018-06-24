import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpBookService {

    readonly url: string = 'http://localhost:50165/';
    readonly httpOptions = {
      header: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

  constructor(private http: HttpClient) { }

    getBooks() {
      return this.http.get(this.url + 'books');
    }

    getBookById(id: number) {
      return this.http.get(this.url + 'books/' + id);
    }
}
