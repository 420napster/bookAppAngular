import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';
import { BookListComponent } from './book-list/book-list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddBookComponent } from './add-book/add-book.component';

@NgModule({
  imports: [
    CommonModule,
        
    BookRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [BookListComponent, AddBookComponent]
})
export class BatchModule { }
