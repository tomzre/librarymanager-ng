import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from '../user-list/user-list.component';
import { UsersService } from './services/users.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UserListComponent],
  providers: [UsersService]
})
export class UsersModule { }
