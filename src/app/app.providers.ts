import {Provider} from '@angular/core';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

import {
  AuthorizationActions
} from './actions';

import {
  AuthenticationProvider, Auth0AuthenticationProvider,
  AuthorizationService, AuthorizationServiceImpl,
  ConfigService, ConfigServiceImpl
} from './services';

import {
  AuthGuard
} from './utils';

export const Providers: Provider[] = [
  { provide: LocationStrategy, useClass: HashLocationStrategy },

  // Auth
  { provide: AuthenticationProvider, useClass: Auth0AuthenticationProvider },
  { provide: AuthorizationService, useClass: AuthorizationServiceImpl },
  AuthorizationActions,
  AuthGuard,

  { provide: ConfigService, useClass: ConfigServiceImpl }
]