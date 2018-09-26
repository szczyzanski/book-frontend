import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Book } from '../../classes/book'
import { BookWithFullInfo } from '../../classes/bookWithFullInfo'

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

  getAllBooks(): Observable<Book[]> {
    const url = this.serverUrl + this.serviceUrl + 'all';
    return this.http.get<Book[]>(url);
  }

  getBookById(id: number): Observable<Book> {
    const url = this.serverUrl + this.serviceUrl + id;
    return this.http.get<Book>(url);
  }

  getNoOfCoversById(id: number): Observable<number> {
    var noOfCovers;
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

  putInDB(body: any): void {
    const url = 'http://127.0.0.1:8080/books/';
    console.log('zaczynamy');
    this.http.post<BookWithFullInfo>(url, body, httpOptions)
      .subscribe(value => console.log('i skonczyly'));
  }
}