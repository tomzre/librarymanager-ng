import { HttpBookService } from './../services/http-book.service';
import {ActivatedRoute, Router} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book';
import { NotFoundError } from '../../common/not-found-error';
import { AppError } from '../../common/app-error';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {

  book: Book;
  books: Book[];
  router: Router;
  private id: number;

  constructor(private bookService: HttpBookService, private route: ActivatedRoute, router: Router) {
    this.router = router;
  }

  ngOnInit() {
    this.route.params.subscribe(params => this.id = params.id);

    this.getBook(this.id);
  }

  private getBook(id: number): void {
    this.bookService.getById(id).subscribe(
      data => {
        this.book = data as Book;
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

  private onSubmit(): void {

    this.bookService.getAll().subscribe(
      data => {
        this.book = data as Book;
      },
      (error: AppError) => {
        if (error instanceof NotFoundError) {
          throw error;
        } else {
          throw error;
        }
      }
    );
    // tslint:disable-next-line:triple-equals
    const bookId: number = this.books.findIndex(x => x.id == this.id);
    console.log(bookId);
    console.log(this.books[bookId]);

    this.bookService.create(this.book);

    console.log(this.books[bookId]);

    // this.bookService.saveBooks(this.books);

    this.router.navigate(['book']);

  }

}
