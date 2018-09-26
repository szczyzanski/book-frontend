import { Component, OnInit } from '@angular/core';

import { BookWithFullInfo } from '../../../classes/bookWithFullInfo';
import { BookService } from '../../../services/book/book.service';

@Component({
  selector: 'app-book-adder',
  templateUrl: './book-adder.component.html',
  styleUrls: ['./book-adder.component.css']
})
export class BookAdderComponent implements OnInit {

  bookWithFullInfo: BookWithFullInfo = {
      isbn: null,
      title: null,
      publisher: null,
      noOfPages: null,
      originalTitle: null,
      origin: null,
    authors: [{name: null}],
    tags: [{value: null}]
  };
  images: String[] = [];  

  constructor(
    private bookService: BookService,
  ) { }

  ngOnInit() {
  }

  searchByIsbn(): void {
    this.bookService.searchByIsbn(this.bookWithFullInfo.isbn)
      .subscribe(book => {
        this.bookWithFullInfo = book;
        this.getCovers(0);
      });
  }

  getCovers(id: number): void {
    const service = this.bookService.getServiceUrl();
    this.bookService.getNoOfCoversById(id)
      .subscribe(value => {
        for(var i=0;i<value;i++) {
          this.images[i] = (service + id.toString() + '&' +  i.toString());
        }
      });
  }

  saveInDB(): void {
    this.bookService.putInDB(this.bookWithFullInfo);
  }
}
