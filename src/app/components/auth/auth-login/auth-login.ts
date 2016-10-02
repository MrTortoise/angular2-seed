import {Component, Output, Input, EventEmitter} from '@angular/core';
import {IAuthService} from '../../../services/auth';
import {FormField} from '../../../utils/';

@Component({
  selector: 'auth-login',
  templateUrl: './auth-login.html'
})
export class AuthLogin {
  @Output() onSubmit = new EventEmitter<void>();
  @Output() onStateChange = new EventEmitter<LoginFormModel>();
  @Input() errors: string[];
  
  model = new LoginFormModel();

  submit() {
    this.onStateChange.emit(this.model);
  }

}

export class LoginFormModel {
    email = new FormField("");
    password = new FormField("");
    keepSignedIn = new FormField(false);
}