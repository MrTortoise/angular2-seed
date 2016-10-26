import {IAuthService} from './index';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {select} from 'ng2-redux';
import {IAuthState} from '../../store';
import {AuthActions} from '../../actions';

import * as Random from '../../utils/random.utils';

@Injectable()
export abstract class BaseAuth implements IAuthService {
  @select(s => s.auth) state$: Observable<IAuthState>;

  constructor(
    private _actions: AuthActions) {
    
    this.loggedInValue = new BehaviorSubject<boolean>(false);
    this.isLoggedIn.subscribe(v => this.loggedInValue.next(v));
  }

  isLoggedIn = this.state$.map(s => s.isAuthenticated);
  isAuthenticating = this.state$.map(s => s.isAuthenticating);
  userEmail = this.state$.map(s => s.email);

  protected loggedInValue: BehaviorSubject<boolean>;

  abstract authenticateWithEmail(email: string, password: string): Observable<void>

  abstract logout(): Observable<void> 
}