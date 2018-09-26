import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Book } from '../../../classes/book';
import { Author } from '../../../classes/author';
import { Tag } from '../../../classes/tag';
import { BookService } from '../../../services/book/book.service';
import { AuthorService } from '../../../services/author/author.service';
import { TagService } from '../../../services/tag/tag.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  book: Book;
  authors: Author[];
  tags: Tag[];
  images: String[] = [];

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private authorService: AuthorService,
    private tagService: TagService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getDetails();
  }

  getDetails(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.bookService.getBookById(id)
      .subscribe(book => this.book = book);
    this.authorService.getAuthorByBookId(id)
      .subscribe(authors => this.authors = authors);
    this.tagService.getTagsByBookId(id)
      .subscribe(tags => this.tags = tags);
    this.getCovers(id);
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

  goBack(): void { 
    this.location.back();
  }
}
