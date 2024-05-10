import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { errorAction, initPosts, loadPosts } from "./posts.actions";
import { catchError, map, mergeMap, of, tap } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class PostsEffects {


    loadEffect = createEffect(() => 
        this.actions$.pipe(
            ofType(initPosts),
            mergeMap(() => 
                this.http.get<any[]>('http://localhost:3000/posts').pipe(
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


    constructor(private actions$: Actions, private http: HttpClient) {}

}