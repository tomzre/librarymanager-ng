import { HttpBookService } from './../services/http-book.service';
import {ActivatedRoute, Router} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book';

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
    this.bookService.getBookById(id).subscribe(
      data => {
        this.book = data as Book;
      }
    );
  }

  onSubmit(): void {

    this.bookService.getBooks().subscribe(
      data => {
        this.book = data as Book;
      }
    );
    // tslint:disable-next-line:triple-equals
    const bookId: number = this.books.findIndex(x => x.id == this.id);
    console.log(bookId);
    console.log(this.books[bookId]);

    this.books[bookId].imageSource = this.book.imageSource;
    this.books[bookId].language = this.book.language;
    this.books[bookId].title = this.book.title;
    this.books[bookId].year = this.book.year;

    console.log(this.books[bookId]);

    // this.bookService.saveBooks(this.books);

    this.router.navigate(['book']);

  }

}
