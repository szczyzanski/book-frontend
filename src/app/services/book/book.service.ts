import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Book } from '../../classes/book'

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
}