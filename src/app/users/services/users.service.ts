import { DataService } from './../../services/data.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService extends DataService {

  constructor(http: HttpClient) {
    super('http://localhost:50165/users', http);
   }
}
