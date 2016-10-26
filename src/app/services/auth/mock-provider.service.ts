import {IAuthProvider, ITokenResult} from './';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Injectable} from '@angular/core';

import * as Random from '../../utils/random.utils';

const MockAuthTokenDefault: ITokenResult = {
  isAuthenticated: false
}

@Injectable()
export class MockAuthProvider implements IAuthProvider {
  private _loginTokenSubject: BehaviorSubject<ITokenResult>;

  public loginTokens: Observable<ITokenResult>;
  public isAuthenticating: Observable<boolean>;

  constructor() {
    this._loginTokenSubject = new BehaviorSubject(MockAuthTokenDefault);
    
    this.loginTokens = this._loginTokenSubject;
    this.isAuthenticating = new BehaviorSubject(false);
  }

  beginLogin(): void {
    this._loginTokenSubject.next({
      isAuthenticated: true
    });
  }

  beginLogout(): void {
    throw 'Not Implemented';
  }

}