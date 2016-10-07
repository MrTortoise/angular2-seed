import {Component, Input, Inject} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {AuthService, IAuthService} from '../../services/auth';

@Component({
  selector: 'auth',
  templateUrl: './auth.html'
})
export class Auth {

  constructor(
    private router: Router) {}

}
