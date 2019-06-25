import {Component, OnInit} from '@angular/core';
import {Book} from '../book';
import { BookService } from '../book.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-book-list',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit{

    books: Book[];
    searchText;
    statusMessage: string;
    constructor(private router: Router, private toastr: ToastrService, private _bookService: BookService){}

    ngOnInit(): void{
        this.getBooks();
    }

    getBooks(): void{
        this._bookService.getAllBooks()
        .subscribe(bookData => {
            this.books = bookData,
            (error) => {
                console.log(error);
                this.statusMessage = "Problem with service. Please try again later!";
            }
        });
    }

    editBook(id) {
        this.router.navigate(['/book/update'], { queryParams: { id: id } });
    }

    deleteBook(bookId) : void{
        this._bookService.deleteBook(bookId);
        this.router.navigate(['/book/list']);
        this.toastr.success('Deleted Successfully');
    }

}