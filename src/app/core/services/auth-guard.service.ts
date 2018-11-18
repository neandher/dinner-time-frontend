import {Injectable} from '@angular/core';
import {CanActivate, CanLoad, Router} from '@angular/router';

import {UserService} from './user.service';
import {JwtService} from './jwt.service';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {

  constructor(private router: Router, private userService: UserService, private jwtService: JwtService) {
  }

  canLoad(): boolean {
    return this.isAuthenticated();
  }

  canActivate(): boolean {
    return this.isAuthenticated();
  }

  private isAuthenticated() {
    if (this.jwtService.getToken()) {
      return true;
    } else {
      this.userService.purgeAuth();
      this.router.navigateByUrl('/login');
      return false;
    }
  }
}
