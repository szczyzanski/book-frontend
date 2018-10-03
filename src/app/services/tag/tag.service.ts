import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Tag } from '../../classes/tag';
import { TagWithBookSetPower } from '../../classes/tagWithBookSetPower';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  private serverUrl = 'http://127.0.0.1:8080/';
  private serviceUrl = 'tags/';

  constructor(
    private http: HttpClient
  ) { }

  getAllTags(): Observable<Tag[]> {
    const url = this.serverUrl + this.serviceUrl + 'all';
    return this.http.get<Tag[]>(url);
  }

  getTagsByBookId(id: number): Observable<Tag[]> {
    const url = this.serverUrl + this.serviceUrl + 'book/' + id;
    return this.http.get<Tag[]>(url);
  }

  getTagById(id: number): Observable<Tag> {
    const url = this.serverUrl + this.serviceUrl + id;
    return this.http.get<Tag>(url);
  }

  getDashboardTags(): Observable<TagWithBookSetPower[]> {
    const url = this.serverUrl + this.serviceUrl + 'top';
    return this.http.get<TagWithBookSetPower[]>(url);
  }
}
