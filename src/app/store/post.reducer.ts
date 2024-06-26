import { createReducer, on } from "@ngrx/store";
import { deletePostSuccess, loadPosts, updatePostSuccess, updatePost } from './posts.actions';
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
    })),
    on(updatePostSuccess, (state, action) => {
      const updatedPosts = state.posts.map(post => {
        if(post.id === action.id) {
          return action;
        }
        return post;
      });
      return {
        ...state,
        posts: updatedPosts
      }
    }),
    on(deletePostSuccess, (state, action) => {

      const updatedPost = state.posts.filter(post => {
        if(post.id !== action.id) {
          return post;
        }
        return post;
      })

      return  {
        ...state,
        updatePost
      }

    })
  );