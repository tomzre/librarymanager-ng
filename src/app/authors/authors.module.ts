import { AuthorService } from './services/author.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [AuthorService]
})
export class AuthorsModule { }
