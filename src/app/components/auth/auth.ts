import {Component, Input, Inject} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {AuthService, IAuthService} from '../../services/auth';
import {LoginFormModel} from './auth-login/auth-login'

@Component({
  selector: 'auth',
  templateUrl: './auth.html'
})
export class Auth {

  constructor(
    @Inject(AuthService) private authService: IAuthService) {}

  isAuthenticating = this.authService.isAuthenticating
  isLoggedIn = this.authService.isLoggedIn

  onLoginSubmit(model: LoginFormModel) {
    this.authService
      .authenticateWithEmail(model.email, model.password);
  }

}
