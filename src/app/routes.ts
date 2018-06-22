import { Routes } from '@angular/router';
import { BookListComponent } from './books/book-list/book-list.component';
import { BookAddComponent } from './books/book-add/book-add.component';
import { BookEditComponent } from './books/book-edit/book-edit.component';


export const routes: Routes = [
  {path: 'book', children: [
    {path: '', component: BookListComponent},
    {path: 'add', component: BookAddComponent},
    {path: 'edit/:id', component: BookEditComponent}]
  }
];
