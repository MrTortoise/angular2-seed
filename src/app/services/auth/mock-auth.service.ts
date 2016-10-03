import {IAuthService} from './index';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import {select} from 'ng2-redux';
import {IAuthState} from '../../store';
import {AuthActions} from '../../actions';

import * as Random from '../../utils/random.utils';

@Injectable()
export class MockAuthService implements IAuthService {
  @select(s => s.auth) state$: Observable<IAuthState>;

  static EMAIL: string = "bob@email.com";
  static PASSWORD: string = "!23Qwe";
  static UUID = "123456";
  static TOKEN = "";

  constructor(
    private _actions: AuthActions) {
  }

  isLoggedIn = this.state$.map(s => s.isAuthenticated);
  isAuthenticating = this.state$.map(s => s.isAuthenticating);
  userEmail = this.state$.map(s => s.email);

  authenticateWithEmail(email: string, password: string): Observable<void> {
    let subject = new Subject<void>();
    let correlationId = Random.id();
    this._actions.beginLoginWithPassword(correlationId);

    Random.timeout(() => {
      if (email == MockAuthService.EMAIL && password == MockAuthService.PASSWORD) {
        MockAuthService.TOKEN = Random.id();
        this._actions.completeLoginWithPassword(
          correlationId, 
          null, 
          MockAuthService.UUID,
          MockAuthService.TOKEN);

        subject.complete();
      }
      else {
        this._actions.completeLoginWithPassword(
          correlationId, 
          "Details not correct.", 
          null,
          null);
          
        subject.error("Details not found.");
      }
    });

    return subject;
  }
}