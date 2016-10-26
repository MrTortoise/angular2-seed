import {OpaqueToken} from '@angular/core';
import {Observable} from 'rxjs/Observable';

export const AuthService = new OpaqueToken("auth.service");
export const AuthProvider = new OpaqueToken("auth.provider");
export const AuthorizationService = new OpaqueToken("authorization.service");

export * from './mock-auth.service';
export * from './auth-guard.service';
export * from './auth0-provider.service';
export * from './authorization.service';

export interface IAuthService {
  isLoggedIn: Observable<boolean>;
  isAuthenticating: Observable<boolean>;
  userEmail: Observable<string>;
  
  authenticateWithEmail(email: string, password: string): Observable<void>;
  logout(): Observable<void>;

}

export interface IAuthorizationService {
  setBearerToken(token: string): void;
}

export interface IToken {
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

export interface ITokenResult {
  isAuthenticated: boolean,
  token?: IToken
}

export const TokenResultDefault: ITokenResult = {
  isAuthenticated: false
}

export interface IAuthProvider {
  loginTokens: Observable<ITokenResult>;
  isAuthenticating: Observable<boolean>;
  beginLogin(): void;
  beginLogout(): void;
}