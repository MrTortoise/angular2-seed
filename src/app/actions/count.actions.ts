import {Injectable} from '@angular/core';
import {NgRedux} from 'ng2-redux';
import {IAppState} from '../store';

@Injectable()
export class CountActions {
  constructor(
    private ngRedux: NgRedux<IAppState>) {
    
  }

  static INCREMENT: string = "INCREMENT";
  static DECREMENT: string = "DECREMENT";

  increment(): void {
    this.ngRedux.dispatch({
      type: CountActions.INCREMENT
    });
  }

  decrement(): void {
    this.ngRedux.dispatch({
      type: CountActions.DECREMENT
    });
  }

}