import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BookService } from './book/book.service';
import { HttpClientModule } from '@angular/common/http';
import { BookListComponent } from './book/book-list/book-list.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AddBookComponent } from './book/add-book/add-book.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent, BookListComponent, AddBookComponent, HeaderComponent, FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
