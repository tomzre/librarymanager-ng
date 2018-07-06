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

  book: Book = new Book(0, '', 0, 0, '', 0, 0, '', null);
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

  onSubmit(): void {
    this.updateBook(this.book);
  }

  private updateBook(book: Book): void {

    console.log(book);

    this.bookService.update(book, book.id).subscribe(
      data => {
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
