import { createReducer, on } from "@ngrx/store";
import { loadPosts } from "./posts.actions";
import { Post } from "../models/post/post.model";


export interface AppState {
    postsState: PostsState;
  }

  export interface PostsState {
    posts: Post[];
  }
  
  export const initialState: PostsState = {
    posts: [],
  };
  
  export const postsReducer = createReducer(
    initialState,
    on(loadPosts, (state, action) => ({
      ...state,
      posts: action.posts,
    }))
  );