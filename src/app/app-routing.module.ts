import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './components/book-list/book-list.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { AuthorListComponent } from './components/author-list/author-list.component';
import { AuthorDetailsComponent } from './components/author-details/author-details.component';
import { TagListComponent } from './components/tag-list/tag-list.component';
import { TagDetailsComponent } from './components/tag-details/tag-details.component';

const routes: Routes = [
  { path: '' , redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'books', component: BookListComponent },
  { path: 'authors', component: AuthorListComponent},
  { path: 'tags', component: TagListComponent},
  { path: 'book/details/:id', component: BookDetailsComponent },
  { path: 'author/details/:id', component: AuthorDetailsComponent},
  { path: 'tag/details/:id', component: TagDetailsComponent}
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
