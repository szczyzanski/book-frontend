import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Book } from '../../classes/book';
import { BookWithFullInfo } from '../../classes/bookWithFullInfo';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private serverUrl = 'http://127.0.0.1:8080/';
  private serviceUrl = 'books/';

  constructor(
    private http: HttpClient
  ) { }

  // GET
  getAllBooks(): Observable<Book[]> {
    const url = this.serverUrl + this.serviceUrl + 'all';
    return this.http.get<Book[]>(url);
  }

  getBookById(id: number): Observable<Book> {
    const url = this.serverUrl + this.serviceUrl + id;
    return this.http.get<Book>(url);
  }

  getNoOfCoversById(id: number): Observable<number> {
    const url = this.serverUrl + this.serviceUrl + 'cover/n/' + id;
    return this.http.get<number>(url);
  }

  getServiceUrl(): String {
    return this.serverUrl + this.serviceUrl + 'cover/';
  }

  searchByIsbn(isbn: number): Observable<BookWithFullInfo> {
    const url = this.serverUrl + this.serviceUrl + 'isbn/' + isbn;
    return this.http.get<BookWithFullInfo>(url);
  }

  getDashboardBooks(): Observable<Book[]> {
    const url = this.serverUrl + this.serviceUrl + 'dashboard';
    return this.http.get<Book[]>(url);
  }

  // POST

  putInDB(body: any): Observable<any> {
    const url = this.serverUrl + this.serviceUrl;
    return this.http.post<BookWithFullInfo>(url, body, httpOptions);
  }

  deleteCoversFoundBySearchingMachine(): Observable<any> {
    const url = this.serverUrl + this.serviceUrl + 'cover/del';
    return this.http.post<String>(url, 'delete', httpOptions);
  }
}