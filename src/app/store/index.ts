import {combineReducers} from 'redux';
import {IAction, CountActions} from '../actions';

export interface IAppState {
  count: number;
}

export const DefaultAppState: IAppState = {
  count: 0
}

export const rootReducer = combineReducers<IAppState>({
  count: function(state: number = DefaultAppState.count, action: IAction) {
    switch (action.type) {
      case CountActions.INCREMENT:
        return state + 1;
      case CountActions.DECREMENT:
        return state - 1;
      default:
        return state;
    }
  }
});