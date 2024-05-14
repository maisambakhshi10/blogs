import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { deletePost, deletePostSuccess, errorAction, initPosts, loadPosts, updatePost, updatePostFailure, updatePostSuccess } from "./posts.actions";
import { catchError, map, mergeMap, of, switchMap, tap } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Post, PostsList } from "../models/post/post.model";
import { Router } from "@angular/router";

@Injectable()
export class PostsEffects {

     localApiUrl = 'http://localhost:3000/posts';

    loadEffect = createEffect(() => 
        this.actions$.pipe(
            ofType(initPosts),
            mergeMap(() => 
                this.http.get<any[]>(`${this.localApiUrl}`).pipe(
                    map(posts => {
                        return loadPosts({ posts });
                    }),
                    catchError(error => {
                        console.error('Error loading posts:', error);
                        return of(errorAction(error)); 
                    })
            )
        )
    )
);


updatePostEffect = createEffect(() =>
    this.actions$.pipe(
        ofType(updatePost),
        switchMap((post) => 
            this.http.put<Post>(`${this.localApiUrl}/${post.id}`, post).pipe(
                map(response => {
                    this.router.navigate(['/posts/list']);
                    return updatePostSuccess(response);
                }),
                catchError(error => {
                    return of(updatePostFailure(error));
                })
            )
        )
    )
)


deletePostEffect = createEffect(() =>
    this.actions$.pipe(
        ofType(deletePost),
        switchMap((payload) => {
            const postId = payload.id;
            return this.http.delete<Post>(`${this.localApiUrl}/${postId}`).pipe(
                map(response => {
                    this.router.navigate(['/posts/list']);
                    return deletePostSuccess(response);
                }),
                catchError(error => {
                    return of(updatePostFailure(error));
                })
            );
        })
    )
);



    constructor(private actions$: Actions, private http: HttpClient, private router: Router) {}

}