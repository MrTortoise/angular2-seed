import {Component, Input, Inject} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {AuthService, IAuthService} from '../../services/auth';
import {LoginFormModel} from './auth-login/auth-login'

@Component({
  selector: 'auth',
  templateUrl: './auth.html'
})
export class Auth {

  constructor(
    @Inject(AuthService) private authService: IAuthService,
    private router: Router) {}

  isAuthenticating = this.authService.isAuthenticating;
  isLoggedIn = this.authService.isLoggedIn;
  loginErrors: string[] = [];

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

}
