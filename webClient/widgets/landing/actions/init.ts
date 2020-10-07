import { createAction } from 'deox';
import { ThunkAction } from '../../../utils';

export const initAction = createAction('landing/init');

export function init(): ThunkAction {
  return async (dispatch) => {
    dispatch(initAction());
    console.log('app init');
  };
}
