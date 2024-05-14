import { Component, Input } from '@angular/core';
import { Post } from '../../../models/post/post.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent {

  constructor(private router: Router) {

  }

  @Input() singlePost?: Post;


  goToSingle(single?: Post) {
    this.router.navigate(['posts/details/', single?.id])
  }

}
