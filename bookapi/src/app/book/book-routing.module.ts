import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import {AddBookComponent} from './add-book/add-book.component';

const routes: Routes = [
  {
    path: 'list',
    component: BookListComponent,
  }, 
  {
    path: 'add',
    component: AddBookComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
