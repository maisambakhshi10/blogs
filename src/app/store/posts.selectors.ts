import { createSelector } from "@ngrx/store";
import { PostsList } from "../models/post/post.model";
import {  AppState, PostsState } from "./post.reducer";


export const selectPostsState = (state: AppState) => state.postsState;

export const selectPosts = createSelector(
  selectPostsState,
  (postsState) => postsState.posts
);