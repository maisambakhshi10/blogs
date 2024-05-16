import { HttpClient, HttpErrorResponse, HttpEvent } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Post } from '../../models/post/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private apiUrl = 'http://localhost:3000/posts';

  constructor(private http: HttpClient) { }

  getSinglePost(id?: string): Observable<Post> {
    return this.http.get<Post>(`${this.apiUrl}/${id}`);
  }

  createPost(post: Post) {
    return this.http.post<Post>(`${this.apiUrl}`, post).pipe(
      catchError(this.handleError)
    )
  }

  getPostId(id: number) {
    return {id: id};
  }


  submitPostData(post: Post) {
    return this.http.put<Post>(`${this.apiUrl}/${post.id}`, post);
  }

  deletePost(postId: string): Observable<Post> {
    return this.http.delete<Post>(`${this.apiUrl}/${postId}`).pipe(
      catchError (this.handleError) 
      )
  }


  private handleError(err: HttpErrorResponse): Observable<never> {
    return throwError(() => err);
  }
}