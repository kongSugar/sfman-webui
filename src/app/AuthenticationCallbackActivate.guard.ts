import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';
import {Location} from '@angular/common';
import {Router} from '@angular/router';

@Injectable()
export class AuthenticationCallbackActivateGuard implements CanActivate {

  constructor(private router: Router, private location: Location) {
  }

  canActivate() {
    var path = this.location.path(true);

    // You may want to make a more robust check here
    var isAuthenticationCallback = path.indexOf("access_token") !== -1;

    if (isAuthenticationCallback) {
      this.router.navigate([''], {fragment: path});

      return false;
    }

    return true;
  }
}
