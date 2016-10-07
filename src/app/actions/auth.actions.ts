import {Injectable} from '@angular/core';
import {NgRedux} from 'ng2-redux';
import {IAppState} from '../store';
import {IAction, IAsyncAction, IAsyncActionCompletion} from './index';

@Injectable()
export class AuthActions {
  constructor(
    private ngRedux: NgRedux<IAppState>) {
    
  }

  static LOGIN_WITH_PASSWORD: string = "AUTH.LOGIN_WITH_PASSWORD";
  static BEGIN_LOGIN_WITH_PASSWORD: string = "AUTH.BEGIN_LOGIN_WITH_PASSWORD";
  static COMPLETE_LOGIN_WITH_PASSWORD: string = "AUTH.COMPLETE_LOGIN_WITH_PASSWORD";
  static LOGOUT = "AUTH.LOGOUT";

  loginWithPassword(email: string, password: string): void {
    let action: ILoginWithPasswordAction = {
      type: AuthActions.LOGIN_WITH_PASSWORD,
      payload: {
        email: email,
        password: password
      }
    };

    this.ngRedux.dispatch(action);
  }

  beginLoginWithPassword(correlationId: string) {
    let action: IBeginLoginWithPasswordAction = {
      type: AuthActions.BEGIN_LOGIN_WITH_PASSWORD,
      correlationId: correlationId
    };

    this.ngRedux.dispatch(action);
  }

  completeLoginWithPassword(
    correlationId: string, 
    error?: string, 
    uuid?: string, 
    token?: string) {
      
    let action: ICompleteLoginWithPasswordAction = {
      type: AuthActions.COMPLETE_LOGIN_WITH_PASSWORD,
      correlationId: correlationId,
      error: error,
      payload: {
        uuid: uuid,
        token: token
      }
    };

    this.ngRedux.dispatch(action);
  }

  logout() {
    let action: ILogoutAction = {
      type: AuthActions.LOGOUT
    };

    this.ngRedux.dispatch(action);
  }

}

export interface ILoginWithPasswordAction extends IAction {
  payload: {
    email: string,
    password: string
  }
}

export interface IBeginLoginWithPasswordAction extends IAsyncAction {
  
}

export interface ICompleteLoginWithPasswordAction extends IAsyncActionCompletion {
  payload?: {
    uuid: string,
    token: string
  }
}

export interface ILogoutAction extends IAction {

}