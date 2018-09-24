import { Component, OnInit } from '@angular/core';

import { Book } from '../../classes/book';
import { BookService } from '../../services/book/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Book[];

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.getBooks();
  }

  getBooks(): void {
    this.bookService.getAllBooks()
        .subscribe(books => this.books = books);
  }
}
