import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SinglePostComponent } from './components/single-post/single-post.component';
import { PostComponent } from '../../shared/components/post/post.component';
import { PostEditComponent } from './components/post-edit/post-edit.component';



@NgModule({
  declarations: [
    SinglePostComponent,
    PostComponent,
    PostEditComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SinglePostComponent
  ]
})
export class PostModule { }
