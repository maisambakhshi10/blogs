import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Post } from '../../../../models/post/post.model';
import { PostService } from '../../../../core/services/post.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent implements OnInit {

  postCreateForm: FormGroup;
  post?: Post;
  currentDate = new Date();


  constructor(private postService: PostService, private router: Router) {

  }


  ngOnInit(): void {
      
    this.postCreateForm = new FormGroup({
      'title': new FormControl(this.post?.title, [Validators.required]),
      'body': new FormControl(this.post?.body, [Validators.required])
    })

  }

  


  onSubmit() {
    if (this.postCreateForm.valid) {

      const postDataWithId = {
        id: "99",
        ...this.postCreateForm.value,
        date: this.currentDate,
        img: "https://dummyimage.com/600x400/000000/fff&text=test",
        user: "test"
      };

      console.log(postDataWithId)

      this.postService.createPost(postDataWithId).subscribe(() => {

        this.router.navigate(['/posts/list']);

      }, error => {
        console.error('Error submitting post data:', error);
      });
     }
  }
}
