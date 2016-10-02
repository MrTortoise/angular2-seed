import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {AuthActions} from './actions/auth.actions';
import {AuthService, MockAuthService} from './services/auth';

export const Providers = [
  { provide: LocationStrategy, useClass: HashLocationStrategy },
  { provide: AuthService, useClass: MockAuthService },
  { provide: AuthActions, useClass: AuthActions }
]