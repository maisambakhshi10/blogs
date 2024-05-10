import { Component } from '@angular/core';
import { PostService } from '../../../../core/services/post.service';
import { Post, PostsList } from '../../../../models/post/post.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { initPosts } from '../../../../store/posts.actions';
import {  selectPosts } from '../../../../store/posts.selectors';
import { AppState, PostsState } from '../../../../store/post.reducer';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent {

  posts$: Observable<any>;

  number$: Observable<number>;

  constructor(private postService: PostService, private store: Store<AppState>) {
    this.store.dispatch(initPosts());
  }
  
  ngOnInit(): void {
    this.posts$ = this.store.select(selectPosts);
  }

}
