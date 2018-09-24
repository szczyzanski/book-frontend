import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Author } from '../../classes/author';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  private serverUrl = 'http://127.0.0.1:8080/';
  private serviceUrl = 'authors/';

  constructor(
    private http: HttpClient
  ) { }

  getAllAuthors(): Observable<Author[]> {
    const url = this.serverUrl + this.serviceUrl + 'all';
    return this.http.get<Author[]>(url);
  }

  getAuthorByBookId(id: number): Observable<Author[]> {
    const url = this.serverUrl + this.serviceUrl + 'book/' + id;
    return this.http.get<Author[]>(url);
  }

  getAuthorById(id: number): Observable<Author> {
    const url = this.serverUrl + this.serviceUrl + id;
    return this.http.get<Author>(url);
  }
}
