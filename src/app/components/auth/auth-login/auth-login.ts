import {Component, Output, Input, EventEmitter} from '@angular/core';
import {IAuthService} from '../../../services/auth';
import {FormField} from '../../../utils/';

@Component({
  selector: 'auth-login',
  templateUrl: './auth-login.html'
})
export class AuthLogin {
  @Output() onSubmit = new EventEmitter<LoginFormModel>();
  @Input() errors: string[];
  @Input() isAuthenticating: boolean;
  
  model = new LoginFormModel();

  submit() {
    this.onSubmit.emit(this.model);
    this.reset();
  }

  reset() {
    this.model = new LoginFormModel();
  }

}

export class LoginFormModel {
  constructor(
    public email = "",
    public password = "",
    public keepSignedIn = false) {}
}