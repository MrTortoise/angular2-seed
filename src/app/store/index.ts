import {combineReducers} from 'redux';
import {IAction} from '../actions';
import {IAuthState, AuthDefaultState, authReducer} from './auth.store';

export * from './auth.store';

export interface IAppState {
  auth: IAuthState;
}

export const DefaultAppState: IAppState = {
  auth: AuthDefaultState
}

export const rootReducer = combineReducers<IAppState>({
  auth: authReducer
});