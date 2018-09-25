import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './components/book/book-list/book-list.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BookDetailsComponent } from './components/book/book-details/book-details.component';
import { AuthorListComponent } from './components/author/author-list/author-list.component';
import { AuthorDetailsComponent } from './components/author/author-details/author-details.component';
import { TagListComponent } from './components/tag/tag-list/tag-list.component';
import { TagDetailsComponent } from './components/tag/tag-details/tag-details.component';
import { BookAdderComponent } from './components/book/book-adder/book-adder.component';

const routes: Routes = [
  { path: '' , redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'books', component: BookListComponent },
  { path: 'authors', component: AuthorListComponent },
  { path: 'tags', component: TagListComponent },
  { path: 'book/details/:id', component: BookDetailsComponent },
  { path: 'author/details/:id', component: AuthorDetailsComponent },
  { path: 'tag/details/:id', component: TagDetailsComponent },
  { path: 'books/add', component: BookAdderComponent  }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
