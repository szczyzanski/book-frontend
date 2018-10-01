import { Component, OnInit } from '@angular/core';
import { faBookOpen, faPencilAlt, faTag, faPenSquare, faHashtag } from '@fortawesome/free-solid-svg-icons';

import { BookWithCover } from '../../classes/bookWithCover';
import { AuthorWithBookSetPower } from '../../classes/authorWithBookSetPower';
import { BookService } from '../../services/book/book.service';
import { AuthorService } from '../../services/author/author.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  faBookOpen = faBookOpen;
  faPencilAlt = faPencilAlt;
  faTag = faTag;
  faPenSquare = faPenSquare;
  faHashtag = faHashtag;
  
  books: BookWithCover[] = [];
  authors: AuthorWithBookSetPower[] = [];

  constructor(
    private bookService: BookService,
    private authorService: AuthorService
  ) { }

  ngOnInit() {
    this.getBooks();
    this.getAuthors();
  }

  getBooks(): void {
    const service = this.bookService.getServiceUrl();
    this.bookService.getDashboardBooks()
      .subscribe(books => {
        for(var i=0;i<books.length;i++) {
          if(books[i].title.length > 25) {
            books[i].title = books[i].title.substring(0, 25) + '...';
          }
          var cover = (service + books[i].id.toString() + '&0');
          this.books.push({book: books[i], cover: cover});
        }
      });
  }

  getAuthors(): void {
    this.authorService.getDashboardAuthors()
      .subscribe(authors => this.authors = authors);
  }

  imgSrcError(id: number): void {
    this.books.forEach(book => {
      if(book.book.id === id) {
        book.cover = this.bookService.getServiceUrl() + 'error/0';
      }
    });
  }
}