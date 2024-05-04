import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './shared/components/nav/nav.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { PostModule } from './features/post/post.module';
import { DashboardModule } from './features/dashboard/dashboard.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


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
    NgbModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
