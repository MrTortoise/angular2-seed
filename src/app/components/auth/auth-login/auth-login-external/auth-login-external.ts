import {Component, Input, Inject, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {AuthService, IAuthProvider, AuthProvider, IAuthorizationService, AuthorizationService} from '../../../../services/auth';

@Component({
  selector: 'auth-login',
  templateUrl: './auth-login.html'
})
export class AuthLoginExternal implements OnInit {

  constructor(
    @Inject(AuthProvider)private _authorizationProvider: IAuthProvider,
    @Inject(AuthorizationService)private _authorizationService: IAuthorizationService) {

      this._authorizationProvider.loginTokens.subscribe(result => {
        if (result.isAuthenticated) {
          this._authorizationService.setBearerToken(result.token.idToken);
        }
      });
    }

  ngOnInit() {
    this._authorizationProvider.beginLogin();
  }
}
