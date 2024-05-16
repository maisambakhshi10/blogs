import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  isLoggedIn: boolean = false;
  constructor() {}

  loggIn(): boolean {

    if(!this.isLoggedIn) {
        setTimeout(() => {
            this.isLoggedIn = true;
            return true;
        }, 2000);
    } else {

        return false;
    }
    return true
  }
}
