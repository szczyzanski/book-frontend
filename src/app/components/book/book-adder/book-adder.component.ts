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
    const isbn = this.bookWithFullInfo.isbn.valueOf();
    this.resetState();
    this.bookService.deleteCoversFoundBySearchingMachine()
      .subscribe(() => {
        this.bookService.searchByIsbn(isbn)
          .subscribe(book => {
            this.bookWithFullInfo = book;
            this.getCovers(0);
          });
      });
  }

  getCovers(id: number): void {
    const service = this.bookService.getServiceUrl();
    this.bookService.getNoOfCoversById(id)
      .subscribe(value => {
        for(var i=0;i<value;i++) {
          this.images[i] = (service + id.toString() + '&' +  i.toString() + '?' + new Date().getTime());
        }
      });
  }

  saveInDB(): void {
    this.bookService.putInDB(this.bookWithFullInfo)
      .subscribe(() => {
        this.bookService.deleteCoversFoundBySearchingMachine()
          .subscribe(() => {
            this.resetState();
          });
      });
  }

  resetState(): void {
    this.bookWithFullInfo = {
      isbn: null,
      title: null,
      publisher: null,
      noOfPages: null,
      originalTitle: null,
      origin: null,
      authors: [{name: null}],
      tags: [{value: null}]
    };
    this.images = [];
  }

  addAuthor() {
    console.log('bumbum');
    this.bookWithFullInfo.authors.push({name: 'grzechu'});
  }

  addTag() {
    console.log('pierdut');
    this.bookWithFullInfo.tags.push({value: 'ajesu'});
  }
}
