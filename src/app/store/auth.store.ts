import {IAction} from '../actions'
import {AuthActions, ICompleteLoginWithPasswordAction} from '../actions'
import * as State from '../utils/state.utils';

export interface IAuthState {
  isAuthenticated: boolean;
  isAuthenticating: boolean;
  email: string;
  uuid: string;
  token: string;
}

export const AuthDefaultState: IAuthState = {
  isAuthenticated: false,
  isAuthenticating: false,
  email: "",
  uuid: "",
  token: ""
}

export function authReducer(state: IAuthState = AuthDefaultState, action: IAction): IAuthState {
  switch(action.type) {
    case AuthActions.BEGIN_LOGIN_WITH_PASSWORD:
      return State.copy(state, { isAuthenticating: true });

    case AuthActions.COMPLETE_LOGIN_WITH_PASSWORD:
      let result = <ICompleteLoginWithPasswordAction> action;
      if (!result.error) {
        return State.copy(state, {
          isAuthenticating: false,
          isAuthenticated: true,
          token: result.payload.token,
          uuid: result.payload.uuid
        });
      }
      else {
        return State.copy(state, AuthDefaultState);
      }

    case AuthActions.LOGOUT:
      return AuthDefaultState;
    
    default:
      return state;
  }
}