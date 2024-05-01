import { Component } from '@angular/core';
import { PostService } from '../../../../core/services/post.service';
import { Post } from '../../../../models/post/post.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent {


  posts: Post[] = [];

  constructor(private postService: PostService) {
  }

  ngOnInit(): void {

    this.postService.getPosts().subscribe(e => {
      this.posts = e;
      console.log(this.posts)
    });
  }

}
