import { Component, OnInit } from '@angular/core';
import { TagService } from '../api/tag.service';
import { Tag } from '../api/models';

@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.css']
})
export class TagListComponent implements OnInit {

  tags: Array<Tag> = [];

  constructor(private tagService: TagService) { }

  ngOnInit() {
    this.tagService.getAll()
      .subscribe((tags) => this.tags = tags,
        err => console.log(err));
  }

}
