import { Injectable } from '@angular/core';
import { Book } from '../../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }

  getBooks(): Book[] {
   return JSON.parse(localStorage.getItem('books'));
  }

  saveBooks(books: Book[]): void {
    localStorage.setItem('books', JSON.stringify(books));
  }
}
