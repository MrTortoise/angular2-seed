import {Component, Input, Inject} from '@angular/core';
import {AuthService, IAuthService} from '../../services/auth';
import {LoginFormModel} from './auth-login/auth-login'

@Component({
  selector: 'auth',
  templateUrl: './auth.html'
})
export class Auth {
  constructor(
    @Inject(AuthService) private authService: IAuthService) {}

  onLoginSubmit(model: LoginFormModel) {
    this.authService
      .authenticateWithEmail(model.email, model.password);
  }

}
