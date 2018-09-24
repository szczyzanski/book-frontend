import { Component, OnInit } from '@angular/core';

import { Tag } from '../../classes/tag';
import { TagService } from '../../services/tag/tag.service';

@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.css']
})
export class TagListComponent implements OnInit {

  tags: Tag[];

  constructor(private tagService: TagService) { }

  ngOnInit() {
    this.getTags();
  }

  getTags(): void {
    this.tagService.getAllTags()
      .subscribe(tags => this.tags = tags);
  }
}
