import { ThunkAction as ReduxThunkAction } from 'redux-thunk';
import { Action } from 'redux';
import { AppState } from './store';

export type ThunkAction<TResult = void> = ReduxThunkAction<TResult, AppState, unknown, Action>
