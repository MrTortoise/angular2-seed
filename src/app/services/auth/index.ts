import {OpaqueToken} from '@angular/core';
import {Observable} from 'rxjs/Observable';

export const AuthService = new OpaqueToken("auth.service");

export * from './mock-auth.service';
export * from './auth-guard.service';
export * from './auth0-auth.service';

export interface IAuthService {
  isLoggedIn: Observable<boolean>;
  isAuthenticating: Observable<boolean>;
  userEmail: Observable<string>;
  
  authenticateWithEmail(email: string, password: string): Observable<void>;
  logout(): Observable<void>;
}

export interface ITokenResult {
  accessToken: string,
  idToken: string,
  idTokenPayload: {
    iss: string,
    sub: string,
    aud: string,
    exp: number,
    iat: number
  }
}

export interface IAuthProvider {
  loginTokens(): Observable<ITokenResult>;
  beginLogin(): void;
  beginLogout(): void;
}