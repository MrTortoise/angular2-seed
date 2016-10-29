import {OpaqueToken} from '@angular/core';
import {Observable} from 'rxjs/Observable';

export const AuthService = new OpaqueToken("auth.service");
export const ExternalAuthenticationProvider = new OpaqueToken("auth.provider");
export const AuthorizationService = new OpaqueToken("authorization.service");

export * from './authentication.service';
export * from './authorization.service';