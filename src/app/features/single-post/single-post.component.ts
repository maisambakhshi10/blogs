import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../../models/post/post.model';
import { PostService } from '../../core/services/post.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrl: './single-post.component.scss'
})
export class SinglePostComponent {

  postId!: number;
  singlePost?: Post;

  constructor(private activatedRoute: ActivatedRoute, private postService: PostService) {

    this.activatedRoute.params.subscribe(param => {
      this.postId = +param['id']
      console.log(this.postId)
      this.postService.getSinglePost(this.postId).subscribe(single => {
        this.singlePost = single
        console.log(this.singlePost)
      });
    })



  }



}
