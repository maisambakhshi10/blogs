import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
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

}
