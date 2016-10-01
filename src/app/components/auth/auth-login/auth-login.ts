import {Component, Output, Input, EventEmitter} from '@angular/core';
import {IAuthService} from '../../../services/auth';

@Component({
  selector: 'auth-login',
  templateUrl: './auth-login.html'
})
export class AuthLogin {
  @Output() onSubmit = new EventEmitter<IAuthLoginFormState>();
  @Input() errors: string[];
  
  constructor() {}

}

export interface IAuthLoginFormState {
  email: string;
  password: string;
  keepLoggedIn: boolean; 
}