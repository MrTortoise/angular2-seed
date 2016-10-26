import {Component, Input, Inject, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {AuthService, IAuthProvider, AuthProvider} from '../../../../services/auth';

@Component({
  selector: 'auth-login',
  templateUrl: './auth-login.html'
})
export class AuthLoginExternal implements OnInit {

  constructor(
    @Inject(AuthProvider)private _auth: IAuthProvider) {
      this._auth.loginTokens.subscribe(result => {
        if (result.isAuthenticated) {

        }
      });
    }

  ngOnInit() {
    this._auth.beginLogin();
  }
}
