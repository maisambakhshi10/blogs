import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SinglePostComponent } from './components/single-post/single-post.component';
import { PostComponent } from '../../shared/components/post/post.component';
import { PostEditComponent } from './components/post-edit/post-edit.component';
import { PostsComponent } from './components/posts/posts.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateComponent } from './components/create/create.component';



@NgModule({
  declarations: [
    SinglePostComponent,
    PostComponent,
    PostEditComponent,
    PostsComponent,
    CreateComponent
  ],
    
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    SinglePostComponent
  ]
})
export class PostModule { }
