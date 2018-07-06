import { BadRequestError } from './../common/bad-request-error';
import { UsersService } from './../users/services/users.service';
import { Component, OnInit } from '@angular/core';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { User } from '../models/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[];

  constructor(private usersSerivice: UsersService) { }

  ngOnInit() {
    this.usersSerivice.getAll().subscribe(response => {
      // TODO: Assign user to variable.
      this.users = response as User[];
    },
    (error: AppError) => {
      if (error instanceof BadRequestError) {
        throw error;
      } else {
        throw error;
      }
    });
  }

  // ,
  //   (error: AppError) => {
  //     if (error instanceof NotFoundError) {
  //       alert('User not found.');
  //     } else {

  //     }
  //   }

}
