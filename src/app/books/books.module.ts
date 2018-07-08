import { AuthorService } from './../authors/services/author.service';
import { FormsModule } from '@angular/forms';
import { HttpBookService } from './services/http-book.service';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './book-list/book-list.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BookAddComponent } from './book-add/book-add.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [BookListComponent, BookEditComponent, BookAddComponent],
  exports: [BookListComponent],
  providers: [
    HttpBookService,
    AuthorService
  ]
})
export class BooksModule { }
