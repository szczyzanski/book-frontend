import { Component, OnInit } from '@angular/core';

import { Book } from '../../../classes/book';
import { Author } from '../../../classes/author';
import { Tag } from '../../../classes/tag';

@Component({
  selector: 'app-book-adder',
  templateUrl: './book-adder.component.html',
  styleUrls: ['./book-adder.component.css']
})
export class BookAdderComponent implements OnInit {

  book: Book = {
    id: null,
    isbn: null,
    title: null,
    noOfPages: null,
    originalTitle: null,
    origin: null
  };

  author: Author = {
    id: null,
    forname: null,
    surname: null,
    bookSet: null
  };

  tag: Tag = {
    id: null,
    value: null,
    bookSet: null
  }

  constructor() { }

  ngOnInit() {
  }

  printBook(): void {
    console.log(this.book);
  }

  printAuthor(): void {
    console.log(this.author);
  }

  printTag(): void {
    console.log(this.tag);
  }
}
