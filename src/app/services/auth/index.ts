import {OpaqueToken} from '@angular/core';
import {Observable} from 'rxjs/Observable';

export const AuthService = new OpaqueToken("auth.service");

export * from './mock-auth.service';
export * from './auth-guard.service';

export interface IAuthService {
  isLoggedIn: Observable<boolean>;
  isAuthenticating: Observable<boolean>;
  userEmail: Observable<string>;
  
  authenticateWithEmail(email: string, password: string): Observable<void>;
  logout(): Observable<void>;
}