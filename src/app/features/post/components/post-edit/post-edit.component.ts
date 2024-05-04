import { Component, OnInit } from '@angular/core';
import { PostService } from '../../../../core/services/post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../../../../models/post/post.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrl: './post-edit.component.scss'
})
export class PostEditComponent implements OnInit {

  postId!: number;
  post?: Post;

  postForm: FormGroup;

  constructor(private postService: PostService, private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(param => {
      this.postId = +param['id'];
    });


    this.postService.getSinglePost(this.postId).subscribe(post => {
      this.post = post;
    });


    this.postForm = new FormGroup({
      'title': new FormControl(this.post?.title, [Validators.required]),
      'body': new FormControl(this.post?.body, [Validators.required])
    })
  }


  onSubmit() {
    if (this.postForm.valid) {
      // Append the ID to the form value
      const postDataWithId = {
        id: this.postId,
        ...this.postForm.value,
        date: this.post?.date,
        img: this.post?.img,
        user: this.post?.user
      };

      this.postService.submitPostData(postDataWithId).subscribe(() => {

        this.router.navigate(['/post/details/', this.post?.id]);

      }, error => {
        console.error('Error submitting post data:', error);
      });
    }
  }
}
