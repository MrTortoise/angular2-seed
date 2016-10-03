import {Component, Input, Inject} from '@angular/core';
import {AuthService, IAuthService} from '../../../services/auth';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.html'
})
export class NavBar {
  constructor(
    @Inject(AuthService) private _authService: IAuthService) {

  }

  isLoggedIn = this._authService.isLoggedIn;

}
