import { createAction } from 'deox';
import { ThunkAction } from '../../../utils';
import { fetchPizzaList } from '../../../services/api/pizzaService';
import { PizzaListResponse } from '../../../../pizzaService/handlers/pizzaList';

export const initAction = createAction('landing/init');

export const fillPizzaData = createAction(
  'landing/fillPizzaData',
  (resolve) => (params: PizzaListResponse) => resolve(params),
);

export function init(): ThunkAction {
  return async (dispatch) => {
    dispatch(initAction());
    const pizzaList = await fetchPizzaList();
    dispatch(fillPizzaData(pizzaList));
  };
}
