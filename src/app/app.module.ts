import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { BookListComponent } from './components/book/book-list/book-list.component';
import { BookDetailsComponent } from './components/book/book-details/book-details.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthorListComponent } from './components/author/author-list/author-list.component';
import { AuthorDetailsComponent } from './components/author/author-details/author-details.component';
import { TagListComponent } from './components/tag/tag-list/tag-list.component';
import { TagDetailsComponent } from './components/tag/tag-details/tag-details.component';
import { BookAdderComponent } from './components/book/book-adder/book-adder.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookDetailsComponent,
    DashboardComponent,
    AuthorListComponent,
    AuthorDetailsComponent,
    TagListComponent,
    TagDetailsComponent,
    BookAdderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
