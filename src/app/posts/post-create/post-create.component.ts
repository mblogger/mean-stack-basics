import { PostService } from './../post.service';
import { Post } from './../post.model';
import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
  constructor(public postService: PostService) {}
  onAddPost(postForm: NgForm) {
    if (postForm.invalid) {
      return;
    }

    this.postService.addPost(postForm.value.title, postForm.value.content);
    postForm.resetForm();
  }
}
