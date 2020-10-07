import { createAction } from 'deox';
import { ThunkAction } from '../../../utils';
import { fetchPizzaList } from '../../../services/api/pizzaService';

export const initAction = createAction('landing/init');

export function init(): ThunkAction {
  return async (dispatch) => {
    dispatch(initAction());
    const pizzaList = await fetchPizzaList();
    console.log(pizzaList);
  };
}
