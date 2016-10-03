import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {AuthActions} from './actions/auth.actions';
import {AuthService, MockAuthService, AuthGuard} from './services/auth';

export const Providers = [
  { provide: LocationStrategy, useClass: HashLocationStrategy },

  // Auth
  { provide: AuthService, useClass: MockAuthService },
  AuthActions,
  AuthGuard
]