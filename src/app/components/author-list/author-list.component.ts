import { Component, OnInit } from '@angular/core';

import { Author } from '../../classes/author';
import { AuthorService } from '../../services/author/author.service';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {

  authors: Author[];

  constructor(private authorService: AuthorService) { }

  ngOnInit() {
    this.getAuthors();
  }

  getAuthors(): void {
    this.authorService.getAllAuthors()
        .subscribe(authors => this.authors = authors);
  }
}
