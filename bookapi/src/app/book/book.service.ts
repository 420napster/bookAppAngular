import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/catch';

import {Book} from './book';

@Injectable()
export class BookService{
    constructor(private _httpService: HttpClient){}


    /*
    getAllBooks(): Observable<Book[]>{
        return this._httpService.get("http://localhost:8082/bookapi/api/book")
                .map((response: Response) => response.json())
                .catch(this.handleError);
    }
    */

    bookApiURL = 'http://localhost:8082/bookapi/api/book/';
    
    getAllBooks():Observable<Book[]>{
        return this._httpService.get<Book[]>(this.bookApiURL);
    }

    getBookById(bookId):Promise<Book>{
        return this._httpService.get<Book>(this.bookApiURL + bookId).toPromise();
    }

    addNewBook(book): Promise<any> {
        return this._httpService.post(this.bookApiURL, book.value).toPromise();
    }

    updateBook(bookId, book): Promise<any> {
        return this._httpService.put(this.bookApiURL + bookId, book.value).toPromise();
    }

    deleteBook(bookId : number): Promise<any>{
        return this._httpService.delete(this.bookApiURL + bookId).toPromise();
    }
    
   
    private handleError(error: Response){
        return Observable.throw(error);
    }
}