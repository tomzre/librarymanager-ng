import { HttpBookService } from './../services/http-book.service';
import { Book } from './../../models/book';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppError } from '../../common/app-error';
import { NotFoundError } from '../../common/not-found-error';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent implements OnInit {

  book: Book = new Book(0, '', null, null, '', null, null, '', null);

  constructor(private router: Router, private bookService: HttpBookService) {

  }

  ngOnInit() {
  }

  onSubmit(): void {

    this.addBook(this.book);

  }

  private addBook(book: Book): void {
    this.bookService.create(book)
      .subscribe(element => {
        this.router.navigate(['book']);
      },
      (error: AppError) => {
        if (error instanceof NotFoundError) {
          throw error;
        } else {
          throw error;
        }
      }
    );
  }
}
