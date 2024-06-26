import { createAction, props } from "@ngrx/store";
import { Post, PostsList } from "../models/post/post.model";


const INIT_POSTS = '[INIT posts] initialise';
const LOAD_POSTS = '[LOAD success] load all the posts';
const LOAD_POSTS_FAILURE = '[LOAD failure] post failure';

const UPDATE_POST = '[UPDATE post] init';
const UPDATE_POST_SUCCESS = '[UPDATE post] success';
const UPDATE_POST_FAILURE = '[UPDATE post] failure';


const DELETE_POST = '[DELETE post] init';
const DELETE_POST_SUCCESS = '[DELETE post] success';
const DELETE_POST_FAILURE = '[DELETE post] failure';

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


export const updatePost = createAction(
    UPDATE_POST,
    props<Post>()
);

export const updatePostSuccess = createAction(
    UPDATE_POST_SUCCESS,
    props<Post>()
);

export const updatePostFailure = createAction(
    UPDATE_POST_FAILURE,
    props<{error: any}>()
);


export const deletePost = createAction(
    DELETE_POST,
    props<{id : string}>()
);

export const deletePostSuccess = createAction(
    DELETE_POST_SUCCESS,
    props<Post>()
);

export const deletePostFailure = createAction(
    DELETE_POST_FAILURE,
    props<{error: any}>()
);