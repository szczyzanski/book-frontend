import { Component } from '@angular/core';
import { faBook, faPenNib, faTags, faBookReader } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  faBook = faBook;
  faPenNib = faPenNib;
  faTags = faTags;
  faBookReader = faBookReader;

  title = 'book-frontend';
}
