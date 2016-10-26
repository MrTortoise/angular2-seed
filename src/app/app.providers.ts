import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {AuthActions} from './actions/auth.actions';
import {AuthorizationActions} from './actions/authorization.actions';
import {AuthService, MockAuthService, AuthGuard, Auth0AuthProvider, AuthorizationServiceImpl} from './services/auth';

export const Providers = [
  { provide: LocationStrategy, useClass: HashLocationStrategy },

  // Auth
  { provide: AuthService, useClass: MockAuthService },
  AuthActions, AuthorizationActions,
  AuthGuard,
  Auth0AuthProvider
]