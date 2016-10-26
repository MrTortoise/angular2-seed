import {Injectable} from '@angular/core';
import {NgRedux} from 'ng2-redux';
import {IAppState} from '../store';
import {IAction, IAsyncAction, IAsyncActionCompletion} from './index';

@Injectable()
export class AuthorizationActions {
  constructor(
    private _ngRedux: NgRedux<IAppState>) {}

    static SET_AUTHORIZATION_HEADER = "AUTHORIZATION.SET_AUTHORIZATION_HEADER";

    setAuthorizationHeader(token: string) {
      let action: ISetAuthorizationHeader = {
        type: AuthorizationActions.SET_AUTHORIZATION_HEADER,
        token: token
      };

      this._ngRedux.dispatch(action);
    }
}

export interface ISetAuthorizationHeader extends IAction {
  token: string;
}