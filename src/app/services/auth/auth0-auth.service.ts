import {IAuthService} from './';
import {Injectable}      from '@angular/core';
import {tokenNotExpired} from 'angular2-jwt';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import {AuthActions} from '../../actions';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/catch';

import {BaseAuthService} from './base-auth.service';

// Avoid name not found warnings
declare var Auth0Lock: any;
declare var Auth0: any;

@Injectable()
export class Auth0AuthService extends BaseAuthService {
  // Configure Auth0
  private _lock: any;
  private _lockDialogShown: BehaviorSubject<boolean>

  constructor(
    private _actions: AuthActions) {
    super(_actions);

    this._lockDialogShown = new BehaviorSubject<boolean>(false);
    
    this._lock = new Auth0Lock("5hSX9X73iQkI1E1oRLOUPcHcqu1PCHRj", "mistakenot.eu.auth0.com", {
      auth: {
        redirect: false
      }
    });

    this._lock.on('authenticated', result => {
      this.loggedInValue.next(true);
      alert(JSON.stringify(result));
    });

    this._lock.on('show', () => {
      this._lockDialogShown.next(true);
    });

    this._lock.on('hide', () => {
      this._lockDialogShown.next(false);
    });

  }

  login(): Observable<void> {
    let subject = new Subject<void>();
    
    this._lockDialogShown.subscribe(value => {
      if(!value) {
        subject.complete();
      }
    });

    this._lock.show();
    
    return subject;
  };

  authenticated() {
    // Check if there's an unexpired JWT
    // It searches for an item in localStorage with key == 'id_token'
    return tokenNotExpired();
  };

  logout() {
    // Remove token from localStorage
    localStorage.removeItem('id_token');
    return Observable.throw({});
  };

  authenticateWithEmail(email: string, password: string) {
    return Observable.throw({});
  }

}