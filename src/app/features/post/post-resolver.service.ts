import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { PostService } from '../../core/services/post.service';
import { Injectable, inject } from "@angular/core";




  export const resolved: ResolveFn<any> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    return inject(PostService).getPostId(2);
  }

