import { HttpClientModule } from '@angular/common/http';
import { BooksModule } from './books/books.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationmenuComponent } from './navigationmenu/navigationmenu.component';
import { AppRoutingModule } from './/app-routing.module';
import { BookDetailComponent } from './books/book-detail/book-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationmenuComponent,
    BookDetailComponent
  ],
  imports: [
    BrowserModule,
    BooksModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
