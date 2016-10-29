import {IAction, ISetAuthorizationHeader, AuthorizationActions} from '../actions'
import * as State from '../utils/state.utils';

export interface IAuthorizationState {
  isAuthorized: boolean;
  token?: ITokenState
}

export interface ITokenState {
  raw: string;
}

export const AuthorizationDefaultState: IAuthorizationState = {
  isAuthorized: false
}

export function authorizationReducer(
    state: IAuthorizationState = AuthorizationDefaultState, action: IAction): IAuthorizationState {

  switch(action.type) {
    
    case (AuthorizationActions.SET_AUTHORIZATION_HEADER):
      let setAuthHeaderAction = <ISetAuthorizationHeader> action;
      return State.copy<IAuthorizationState>(state, {
        isAuthorized: true,
        token: setAuthHeaderAction.token
      });

    default:
      return state;
  }

}