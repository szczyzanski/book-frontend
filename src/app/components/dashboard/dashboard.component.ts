import { Component, OnInit } from '@angular/core';
import { Book } from '../../classes/book';
import { BookService } from '../../services/book/book.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  books: Book[] = [];

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.bookService.getAllBooks()
      .subscribe(books => this.books = books.slice(1, 2));
  }
}