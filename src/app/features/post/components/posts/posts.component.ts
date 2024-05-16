import { Component } from '@angular/core';
import { PostService } from '../../../../core/services/post.service';
import { Post, PostsList } from '../../../../models/post/post.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { initPosts } from '../../../../store/posts.actions';
import {  selectPosts } from '../../../../store/posts.selectors';
import { AppState, PostsState } from '../../../../store/post.reducer';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent {

  posts$: Observable<any>;

  number$: Observable<number>;

  constructor(
    private postService: PostService, 
    private store: Store<AppState>,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.store.dispatch(initPosts());

    this.route.data.subscribe(e => console.log(e))

  }
  
  ngOnInit(): void {
    this.posts$ = this.store.select(selectPosts);

    console.log(this.router.config)

  }

}
