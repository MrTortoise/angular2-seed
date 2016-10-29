import {Inject, Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {AuthService, IAuthService} from '../services'; 

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    @Inject(AuthService) private _authService: IAuthService){}

  canActivate() {
    return this._authService.isLoggedIn;
  }

}
