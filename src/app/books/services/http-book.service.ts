import { DataService } from './../../services/data.service';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpBookService extends DataService {

   constructor(http: HttpClient) {
      super('http://localhost:50165/books', http);
     }
}
