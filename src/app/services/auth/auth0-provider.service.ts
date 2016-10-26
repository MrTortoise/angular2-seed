import {IAuthProvider, ITokenResult, TokenResultDefault} from './index';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Injectable} from '@angular/core';

declare var Auth0Lock: any;
declare var Auth0: any;

export interface IAuth0LockConfig {
    clientId: string,
    domain: string,
    options: any
}

export const Auth0LockConfigDefault: IAuth0LockConfig = {
    clientId: "5hSX9X73iQkI1E1oRLOUPcHcqu1PCHRj",
    domain: "mistakenot.eu.auth0.com",
    options: {
        auth: {
            redirect: false
        }
    }
}

@Injectable()
export class Auth0AuthProvider implements IAuthProvider {
    private _lock: any;
    private _lockDialogShown: BehaviorSubject<boolean>;
    private _loginTokenSubject: BehaviorSubject<ITokenResult>;

    public loginTokens: Observable<ITokenResult>;
    public isAuthenticating: Observable<boolean>;

    constructor() {
        this._lockDialogShown = new BehaviorSubject(false);
        this._loginTokenSubject = new BehaviorSubject(TokenResultDefault);
        this._lock = new Auth0Lock(Auth0LockConfigDefault.clientId, Auth0LockConfigDefault.domain, Auth0LockConfigDefault.options);
        this.loginTokens = this._loginTokenSubject;
        this.isAuthenticating = this._lockDialogShown;

        
        this._lock.on('authenticated', result => {
            this._loginTokenSubject.next({
                isAuthenticated: true,
                token: result
            });
        });

        this._lock.on('authorization_error', error => {
            this._loginTokenSubject.next(TokenResultDefault);
        })

        this._lock.on('show', () => {
            this._lockDialogShown.next(true);
        });

        this._lock.on('hide', () => {
            this._lockDialogShown.next(false);
        });
        
    }

    beginLogin(): void {
        this._lock.show();
    }

    beginLogout(): void {
        throw 'Not Implemented';
    }
}