import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NavComponent } from './shared/components/nav/nav.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { PostModule } from './features/post/post.module';
import { DashboardModule } from './features/dashboard/dashboard.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { postsReducer } from './store/post.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { PostsEffects } from './store/posts.effects';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    PostModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    DashboardModule,
    NgbModule,
    StoreModule.forRoot({postsState: postsReducer}),
    EffectsModule.forRoot([PostsEffects]),
    StoreDevtoolsModule.instrument({})
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
