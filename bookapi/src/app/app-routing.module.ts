import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BookListComponent} from './book/book-list/book-list.component'; 
import {AddBookComponent} from './book/add-book/add-book.component';

const routes: Routes = [
  {path: 'book/list', component: BookListComponent},
  {path: 'book/add', component: AddBookComponent},
  {path: 'book/update', component: AddBookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
