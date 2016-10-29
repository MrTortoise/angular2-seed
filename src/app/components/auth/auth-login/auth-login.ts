import {Component, Input, Inject, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {LoginFormModel} from './auth-login-form/auth-login-form'
import {
  AuthService, IAuthService, 
  Auth0AuthProvider, 
  ConfigService, IConfigService, IConfig} from '../../../services';

@Component({
  selector: 'auth-login',
  templateUrl: './auth-login.html'
})
export class AuthLogin {

  constructor(
    @Inject(AuthService)private authService: IAuthService,
    @Inject(ConfigService)private _configService: IConfigService<IConfig>,
    private auth: Auth0AuthProvider,
    private router: Router) {}

  isAuthenticating = this.authService.isAuthenticating;
  isLoggedIn = this.authService.isLoggedIn;
  loginErrors: string[] = [];
  loginType: string;

  onLoginSubmit(model: LoginFormModel) {
    this.loginErrors = [];
    this.authService
      .authenticateWithEmail(model.email, model.password)
      .subscribe({
        error: (e: string) => { 
          this.loginErrors = [e] 
        },
        complete: () => {
          this.loginErrors = [];
          this.router.navigate(["home"]);
        }
      });
  }

  clickLogin() {
    this.auth.beginLogin();
  }

}
