import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SinglePostComponent } from './features/post/components/single-post/single-post.component';
import { PostRoutingModule } from './features/post/routing.module';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component: AppComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    PostRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
