import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SinglePostComponent } from './components/single-post/single-post.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostEditComponent } from './components/post-edit/post-edit.component';

const routes: Routes = [
    {
        path: 'posts',
        component: PostsComponent
    },
    {
        path: 'post/details/:id',
        component: SinglePostComponent
    },
    {
        path: 'post/edit/:id',
        component: PostEditComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PostRoutingModule { }
