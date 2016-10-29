import {IAction} from '../actions'
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
    default:
      return state;
  }

}