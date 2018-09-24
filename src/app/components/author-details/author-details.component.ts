import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Author } from '../../classes/author';
import { AuthorService } from '../../services/author/author.service';

@Component({
  selector: 'app-author-details',
  templateUrl: './author-details.component.html',
  styleUrls: ['./author-details.component.css']
})
export class AuthorDetailsComponent implements OnInit {
  
  author: Author;

  constructor(
    private route: ActivatedRoute,
    private authorService: AuthorService,
    private location: Location 
  ) { }

  ngOnInit() {
    this.getDetails();
  }

  getDetails(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.authorService.getAuthorById(id)
      .subscribe(author => this.author = author);
  }

  goBack(): void {
    this.location.back();
  }
}
