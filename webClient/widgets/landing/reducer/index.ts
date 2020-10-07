import { combineReducers } from 'redux';
import { createReducer } from 'deox';
import { initAction } from '../actions/init';

const mainDefaultState: {isInit: boolean} = { isInit: false };

const main = createReducer(mainDefaultState, (handle) => [
  handle(initAction, (prevState) => ({
    ...prevState,
    isInit: true,
  })),
]);

export interface LandingState {
    main: typeof mainDefaultState
}

export default combineReducers({
  main,
});
