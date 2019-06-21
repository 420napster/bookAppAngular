import { Component, OnInit } from '@angular/core';
import {BookService} from '../book.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../book';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {

  addBatchTitle = 'Add New Book';
  btnName: String = "Add New";
  id: number;
  title: string;
  author: string;
  //book: Book;
  

  constructor(private router: Router, private route: ActivatedRoute, private _bookService: BookService) { }

  addBook(book) {
    if (this.btnName == 'Add New') {
      this._bookService.addNewBook(book);
      this.router.navigate(['/book/list']);      
    } else {
      this._bookService.updateBook(this.id, book);
      this.router.navigate(['/book/list']);
    } 
  }

  ngOnInit() {
  
    this.route.queryParams.subscribe(params => {

      const book = this._bookService.getBookById(+params.id)

      book.then((res) => {
        this.id = res.id;
        this.title = res.title;
        this.author = res.author;

        if(this.title != null){
          this.btnName = 'Save';
          this.addBatchTitle = 'Update Batch';
        } 

      });

    });
  }

}