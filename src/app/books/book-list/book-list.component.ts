import { HttpBookService } from './../services/http-book.service';
import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book';
import { Router } from '@angular/router';

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

  getBooks(): void {
     this.bookService.getBooks().subscribe(
      data => {
        this.bookArr = data as Book[];
      }
    );
  }

  addItems(): void {
    this.bookArr = [ new Book(1, 'title', 1, 2008, 'GB', 289, 1, 'http://kreatywna-okladka.pl/public/upload/catalog/product/10/minigallery/thumb_page_1450734301Forbes.png'),
    new Book(2, 'title2', 1, 1999, 'PL', 2100, 4, 'https://images-na.ssl-images-amazon.com/images/I/81EjDm%2BYl8L.jpg')
                ];

    // this.bookService.saveBooks(this.bookArr);
  }

  editBook(id: number): void {
    this.router.navigate(['book/edit', id]);
  }


  deleteBook(id: number): void {

    if (!confirm('Are you sure to delete?')) {
      return;
    }

   const books: Book[] = JSON.parse(localStorage.getItem('books'));

   const bookById = books.find(x => x.id === id);

    console.log(bookById.id);

    books.splice(books.indexOf(bookById), 1);

    localStorage.setItem('books', JSON.stringify(books));
    this.bookArr = JSON.parse(localStorage.getItem('books'));
  }

}
