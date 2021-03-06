import { Injectable } from "@angular/core";

import { CanActivate, Router } from "@angular/router";

import { AuthService } from "src/app/core/shared/auth.service";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate() {
    if (this.authService.userSignedIn()) {
      return true
    } else {
      this.router.navigate(['/sign-in'])
      return false
    }
  }

}