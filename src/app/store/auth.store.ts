import {IAction} from '../actions'

export interface IAuthState {
  isLoggingIn: boolean;
  email: string;
  uuid: string;
  token: string;
}

export const AuthDefaultState: IAuthState = {
  isLoggingIn: false,
  email: "",
  uuid: "",
  token: ""
}

export function authReducer(state: IAuthState = AuthDefaultState, action: any) {
  return state;
}