import {IAuthorizationService} from './';
import {AuthorizationActions} from '../../actions';
import {Injectable} from '@angular/core';

@Injectable()
export class AuthorizationServiceImpl implements IAuthorizationService {
  constructor(
    private _actions: AuthorizationActions) {}

  setBearerToken(token: string): void {
    this._actions.setAuthorizationHeader('Bearer ' + token);
  }

}