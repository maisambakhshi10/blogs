import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Post } from '../../models/post/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('/assets/data.json');
  }

  getSinglePost(id: number): Observable<Post | undefined> {
    return this.getPosts().pipe(
      map(posts => posts.find(post => post.id === id))
    )
  }


  submitPostData(post: Post) {
    return this.getPosts().pipe(
      map(posts => {
        const index = posts.findIndex(p => p.id === post.id);
        if (index !== -1) {
          posts[index] = post;
          return posts;
        } else {
          throw new Error('Post not found');
        }
      }),
      catchError(error => {
        return throwError(error);
      }),
      map(updatedPosts => {
        console.log(updatedPosts)
        return this.http.put<void>('/assets/data.json', updatedPosts);
      })
    );
  }

  deletePost(postId: number): Observable<void> {
    return this.getPosts().pipe(
      switchMap(posts => {
        const filteredPosts = posts.filter(post => post.id !== postId);
        return this.http.put<void>('/assets/data.json', filteredPosts);
      }),
      catchError(error => {
        return throwError(error);
      })
    );
  }

}