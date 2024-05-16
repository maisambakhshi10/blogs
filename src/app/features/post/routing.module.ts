import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SinglePostComponent } from './components/single-post/single-post.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostEditComponent } from './components/post-edit/post-edit.component';
import { CreateComponent } from './components/create/create.component';
import { DeactivateGuard } from './deactivate-guard.service';
import { resolved } from './post-resolver.service';

const routes: Routes = [
    {
        path: 'list',
        component: PostsComponent,
        resolve: {resolve: resolved}
    },
    {
        path: 'details/:id',
        component: SinglePostComponent
    },
    {
        path: 'create',
        component: CreateComponent
    },
    {
        path: 'edit/:id',
        component: PostEditComponent,
        canDeactivate: [DeactivateGuard] 
    }
   
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PostRoutingModule { }
