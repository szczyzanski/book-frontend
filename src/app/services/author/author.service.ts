import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Author } from '../../classes/author';
import { AuthorWithBookSetPower } from '../../classes/authorWithBookSetPower';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  private serverUrl = 'http://127.0.0.1:8080/';
  private serviceUrl = 'authors/';

  constructor(
    private http: HttpClient
  ) { }

  // GET

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

  getDashboardAuthors(): Observable<AuthorWithBookSetPower[]> {
    const url = 'http://127.0.0.1:8080/authors/top' //this.serverUrl + this.serviceUrl + 'top';
    return this.http.get<AuthorWithBookSetPower[]>(url);
  }
}
