import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IBook} from './ibook';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private URL_API = 'http://localhost:3000/books';

  constructor(private http: HttpClient) {
  }

  getAllBook(): Observable<any> {
    return this.http.get(this.URL_API);
  }
  create(book: IBook): Observable<any> {
    return this.http.post<IBook>(this.URL_API, book);
  }
  getById(id: any): Observable<IBook> {
    // @ts-ignore
    return this.http.get<IUser>(this.URL_API + `/${id}`);
  }

  updateBook( book: IBook): Observable<any> {
    // @ts-ignore
    return this.http.put<IUser>(this.URL_API + `/${book.id}`, book);
  }
  deleteBook(id: string, book: IBook): Observable<IBook> {
    // @ts-ignore
    return this.http.delete(this.URL_API + `/${id}`, book);
  }
  detailBook(id: string, book: IBook): Observable<IBook> {
    // @ts-ignore
    return this.http.get(this.URL_API + `/${id}`, book);
  }
}
