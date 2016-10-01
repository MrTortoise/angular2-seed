import {OpaqueToken} from '@angular/core';
import {Observable} from 'rxjs/Observable';

export const AuthService = new OpaqueToken("auth.service");

export interface IAuthService {
  isLoggedIn(): Observable<boolean>;
  userEmail(): Observable<string>;
  authenticateWithEmail(email: string, password: string): Observable<void>;
}