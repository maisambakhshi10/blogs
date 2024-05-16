import { CanActivateFn, Router } from "@angular/router";
import { AuthService } from "./auth.service";
import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class PostAuthGuard {

    constructor(private router: Router, private authService: AuthService) {}


    canActivate: CanActivateFn = (route, state) => {
        if(this.authService.loggIn()) {
            return true;
        }else {
            this.router.navigate(['/']);
            console.log('not ture')
            return false;
        }
    }
    

}