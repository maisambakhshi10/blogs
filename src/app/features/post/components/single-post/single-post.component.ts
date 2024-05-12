import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../../../../models/post/post.model';
import { PostService } from '../../../../core/services/post.service';
import { Observable } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { State, Store } from '@ngrx/store';
import { deletePost } from '../../../../store/posts.actions';
import { AppState, PostsState } from '../../../../store/post.reducer';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrl: './single-post.component.scss'
})
export class SinglePostComponent implements OnInit{

  postId?: string;
  singlePost: Post;

  @ViewChild('deleteConfirmationModal') deleteConfirmationModal: any;


  constructor(
    private activatedRoute: ActivatedRoute, 
    private postService: PostService, 
    private router: Router, 
    private modalService: NgbModal,
    private store: Store<AppState>,
  ) {

    this.activatedRoute.params.subscribe(param => {
      this.postId = param['id']
      this.postService.getSinglePost(this.postId).subscribe(single => {
        this.singlePost = single
      });
    })
  }

  ngOnInit(): void {
  }

  navigateToEdit(id?: string) {
    this.router.navigate(['post/edit', id])
  }

  openDeleteModal(id: string | undefined): void {
    this.postId = id;
    this.modalService.open(this.deleteConfirmationModal)
  }

  deletePost(postId: string): void {
    this.store.dispatch(deletePost({id: postId}));
    this.modalService.dismissAll();
  }

}
