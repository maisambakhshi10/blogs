import { createAction, props } from "@ngrx/store";
import { Post, PostsList } from "../models/post/post.model";


const INIT_POSTS = '[INIT posts] initialise';
const LOAD_POSTS = '[LOAD success] load all the posts';
const LOAD_POSTS_FAILURE = '[LOAD failure] post failure';

export const initPosts = createAction(
    INIT_POSTS
);

export const loadPosts = createAction(
    LOAD_POSTS,
    props<PostsList>()
);

export const errorAction = createAction(
    LOAD_POSTS_FAILURE, 
    props<{ error: any }>() 
  );