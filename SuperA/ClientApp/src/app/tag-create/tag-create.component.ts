import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TagService } from '../api/tag.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tag-create',
  templateUrl: './tag-create.component.html',
  styleUrls: ['./tag-create.component.css']
})
export class TagCreateComponent implements OnInit {
  createTagForm = this.fb.group({
    name: ['', Validators.required],
    type: ['', Validators.required],
  });

  constructor(public fb: FormBuilder, private tagService: TagService, private router: Router) {
  }

  onSubmit() {
    if (!this.createTagForm.valid) {
      return;
    }

    this.tagService.create(this.createTagForm.value)
      .subscribe(() => {
        this.router.navigate(['tags']);
      }, err => console.log(err));
  }
  ngOnInit() {
  }

}
