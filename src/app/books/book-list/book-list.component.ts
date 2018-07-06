import { NotFoundError } from './../../common/not-found-error';
import { HttpBookService } from './../services/http-book.service';
import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book';
import { Router } from '@angular/router';
import { AppError } from '../../common/app-error';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  bookArr: Book[];
  router: Router;

  constructor(router: Router, private bookService: HttpBookService) {
    this.router = router;
  }

  ngOnInit() {
   this.getBooks();
}

  private getBooks(): void {
     this.bookService.getAll().subscribe(
      data => {
        this.bookArr = data as Book[];
        console.log(data);
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

  editBook(id: number): void {
    this.router.navigate(['book/edit', id]);
  }


  deleteBook(id: number): void {

    if (!confirm('Are you sure to delete?')) {
      return;
    }

    const bookById = this.bookArr.find(x => x.id === id);

    this.bookService.delete(id)
      .subscribe(data => {
          this.bookArr.splice(this.bookArr.indexOf(bookById), 1);
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
