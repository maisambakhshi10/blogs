import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
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

}
