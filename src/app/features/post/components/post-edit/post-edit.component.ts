import { Component, OnInit } from '@angular/core';
import { PostService } from '../../../../core/services/post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../../../../models/post/post.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { updatePost } from '../../../../store/posts.actions';
import { AppState } from '../../../../store/post.reducer';
import { selectPostById } from '../../../../store/posts.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrl: './post-edit.component.scss'
})
export class PostEditComponent implements OnInit {

  postId!: string;
  post?: Post;

  postForm: FormGroup;

  hasUnsavedChanges: boolean = false;

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.hasUnsavedChanges) {
      return confirm('You have unsaved changes. Do you really want to leave?');
    }
    return true;
  }

  constructor(
    private postService: PostService, 
    private activatedRoute: ActivatedRoute, 
    private router: Router,
    private store: Store<AppState>
  ) {

    this.activatedRoute.params.subscribe(param => {
      this.postId = param['id'];
    });


     this.store.select(selectPostById(this.postId)).subscribe(post => this.post = post);
  }

  ngOnInit(): void {



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

      this.store.dispatch(updatePost(postDataWithId))

    }
  }
}
