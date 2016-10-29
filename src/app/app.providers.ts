import {LocationStrategy, HashLocationStrategy} from '@angular/common';

import {
  AuthorizationActions
} from './actions';

import {
  AuthenticationProvider, Auth0AuthenticationProvider,
  AuthorizationService, AuthorizationServiceImpl,
} from './services';

import {
  AuthGuard
} from './utils';

export const Providers = [
  { provide: LocationStrategy, useClass: HashLocationStrategy },

  // Auth
  { provide: AuthenticationProvider, useClass: Auth0AuthenticationProvider },
  { provide: AuthorizationService, AuthorizationServiceImpl},
  AuthorizationActions,
  AuthGuard
]