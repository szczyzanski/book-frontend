import { Component, OnInit } from '@angular/core';
import { faBookOpen, faPencilAlt, faTag, faPenSquare, faHashtag } from '@fortawesome/free-solid-svg-icons';

import { BookWithCover } from '../../classes/bookWithCover';
import { AuthorWithBookSetPower } from '../../classes/authorWithBookSetPower';
import { TagWithBookSetPower } from '../../classes/tagWithBookSetPower';
import { BookService } from '../../services/book/book.service';
import { AuthorService } from '../../services/author/author.service';
import { TagService } from '../../services/tag/tag.service';

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
  tags: TagWithBookSetPower[] = [];
  tagLabels: {
    index: number;
    value: String; 
    valueTimerId: any;
    powerTimerId: any;
    fontSize: String;
    countedFontSize: String;
  }[] = [];

  constructor(
    private bookService: BookService,
    private authorService: AuthorService,
    private tagService: TagService) {
  }

  ngOnInit() {
    this.getBooks();
    this.getAuthors();
    this.getTags();
  }
  
  getBooks(): void {
    const service = this.bookService.getServiceUrl();
    this.bookService.getDashboardBooks()
      .subscribe(books => {
        for(var i=0;i<books.length;i++) {
          if(books[i].title.length > 20) {
            books[i].title = books[i].title.substring(0, 20) + '...';
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

  getTags(): void {
    this.tagService.getDashboardTags()
      .subscribe(tags => {
        this.tags = tags;
        this.formatTags();
      });
  }

  formatTags(): void {
    var longestTag = 0;
    var longestWord = 0;
    for(var i = 0; i < this.tags.length; i++) {
      var fontSize = this.countFontSize(this.tags[i].value);
      this.tagLabels.push({index: i, value: this.tags[i].bookSetPower.toString(), valueTimerId: null, powerTimerId: null, fontSize: '50px', countedFontSize: fontSize});
    }
  }

  countFontSize(value: String): String {
    var array = value.split(" ");
    var length = 0;
    //word
    for(var i = 0; i < array.length; i++) {
      if(array[i].length > length) {
        length = array[i].length;
      }
    }
    //value
    var factor = value.length;
    if(value.length > 20) {
      factor -= 14;
    }
    if(value.length > 30) {
      factor -= 13;
    }
    if(length > 10) {
      factor += 0.5;
    }
    if(length > 15) {
      factor += 2;
    }
    return (150/factor).toString() + 'px';
  }

  imgSrcError(id: number): void {
    this.books.forEach(book => {
      if(book.book.id === id) {
        book.cover = this.bookService.getServiceUrl() + 'error/0';
      }
    });
  }

  changeToValues(index: number): void {
    clearTimeout(this.tagLabels[index].powerTimerId);
    this.tagLabels[index].valueTimerId = setTimeout(() => {
          this.tagLabels[index].value = this.tags[index].value;
          this.tagLabels[index].fontSize = this.tagLabels[index].countedFontSize;
    }, 800);
  }

  changeToPower(index: number): void {
    clearTimeout(this.tagLabels[index].valueTimerId);
    this.tagLabels[index].powerTimerId = setTimeout(() => {
      this.tagLabels[index].value = this.tags[index].bookSetPower.toString();
      this.tagLabels[index].fontSize = '50px';
    }, 800);
  }
}