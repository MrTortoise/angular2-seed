import { IAuthService } from './';
import { Injectable }      from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';

// Avoid name not found warnings
declare var Auth0Lock: any;
declare var Auth0: any;

@Injectable()
export class Auth0AuthService  {
  // Configure Auth0
  lock = new Auth0Lock("5hSX9X73iQkI1E1oRLOUPcHcqu1PCHRj", "mistakenot.eu.auth0.com", {});

  constructor() {
    // Add callback for lock `authenticated` event
    this.lock.on('authenticated', (authResult) => {
      localStorage.setItem('id_token', authResult.idToken);
      alert(authResult);
    });
  }

  login() {
    // Call the show method to display the widget.
    this.lock.show();
  };

  authenticated() {
    // Check if there's an unexpired JWT
    // It searches for an item in localStorage with key == 'id_token'
    return tokenNotExpired();
  };

  logout() {
    // Remove token from localStorage
    localStorage.removeItem('id_token');
  };

}