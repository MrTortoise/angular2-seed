import {Component, Input, Inject, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {AuthService, IAuthService} from '../../../services/auth';
import {LoginFormModel} from './auth-login-form/auth-login-form'

@Component({
  selector: 'auth-login',
  templateUrl: './auth-login.html'
})
export class AuthLogin {

  constructor(
    @Inject(AuthService) private authService: IAuthService,
    private router: Router) {}

  isAuthenticating = this.authService.isAuthenticating;
  isLoggedIn = this.authService.isLoggedIn;
  loginErrors: string[] = [];

  ngOnInit() {
    this.authService.isLoggedIn.subscribe(loggedIn => {
      if (loggedIn) {
        this.router.navigate(["home"]); 
      }
    });
  }

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
        }
      });
  }

}
