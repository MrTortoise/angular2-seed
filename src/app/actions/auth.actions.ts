import {Injectable} from '@angular/core';
import {NgRedux} from 'ng2-redux';
import {IAppState} from '../store';
import {IAction} from './index';

@Injectable()
export class AuthActions {
  constructor(
    private ngRedux: NgRedux<IAppState>) {
    
  }

  static LOGIN_WITH_PASSWORD: string = "LOGIN_WITH_PASSWORD";

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


}

export interface ILoginWithPasswordAction extends IAction {
  payload: {
    email: string,
    password: string
  }
}