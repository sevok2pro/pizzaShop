import { createReducer } from 'deox';
import { fillPizzaData, initAction } from '../actions/init';

const pizzaListState: {
    allPizzas: string[],
    allPizzasLoadingState: 'pending' | 'loaded'
} = {
  allPizzas: [],
  allPizzasLoadingState: null,
};
export type PizzaListState = typeof pizzaListState;
const pizzaListReducer = createReducer(pizzaListState, (handle) => [
  handle(initAction, (prevState) => ({
    ...prevState,
    allPizzasLoadingState: 'pending',
  })),
  handle(fillPizzaData, (prevState, action) => {
    const { payload } = action;
    const { result: allPizzas } = payload;
    return {
      ...prevState,
      allPizzas,
      allPizzasLoadingState: 'loaded',
    };
  }),
]);

export default pizzaListReducer;
