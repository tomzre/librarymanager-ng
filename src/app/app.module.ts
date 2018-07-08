import { AuthorsModule } from './authors/authors.module';
import { AppErrorHandler } from './common/app-error-handler';
import { DataService } from './services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { BooksModule } from './books/books.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationmenuComponent } from './navigationmenu/navigationmenu.component';
import { AppRoutingModule } from './/app-routing.module';
import { BookDetailComponent } from './books/book-detail/book-detail.component';
import { UsersModule } from './users/users.module';

@NgModule({
  declarations: [
    AppComponent,
    NavigationmenuComponent,
    BookDetailComponent
  ],
  imports: [
    BrowserModule,
    BooksModule,
    UsersModule,
    AuthorsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    DataService,
    {provide: ErrorHandler, useClass: AppErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
