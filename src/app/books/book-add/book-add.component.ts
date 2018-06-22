import { Book } from './../../models/book';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent implements OnInit {

  router: Router;
  book: Book = new Book(null, '', null, null, '', null, null, '');

  constructor(router: Router) {
    this.router = router;
  }

  ngOnInit() {
  }

  onSubmit(): void {

    this.addToLocalStorage(this.book);


  }

  private addToLocalStorage(book: Book): void {
    const books: Book[] = JSON.parse(localStorage.getItem('books'));

    this.book.id = books.length + 1;

    books.push(this.book);

    localStorage.setItem('books', JSON.stringify(books));

    this.router.navigate(['book']);

  }

}
