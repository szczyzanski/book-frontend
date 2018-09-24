import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Tag } from '../../classes/tag';
import { TagService } from '../../services/tag/tag.service';

@Component({
  selector: 'app-tag-details',
  templateUrl: './tag-details.component.html',
  styleUrls: ['./tag-details.component.css']
})
export class TagDetailsComponent implements OnInit {

  tag: Tag;

  constructor(
    private route: ActivatedRoute,
    private tagService: TagService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getDetails();
  }

  getDetails(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.tagService.getTagById(id)
      .subscribe(tag => this.tag = tag);
  }

  goBack(): void {
    this.location.back();
  }
}
