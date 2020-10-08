import { createReducer } from 'deox';
import { fillPizzaData } from '../actions/init';
import { Ingredients, Pizzas } from '../../../../shared/entities';

const entitiesDefaultState: {
    ingredients: Record<string, Ingredients>,
    pizzas: Record<string, Pizzas>
} = {
  ingredients: {},
  pizzas: {},
};
export type EntitiesState = typeof entitiesDefaultState;
const entitiesReducer = createReducer(entitiesDefaultState, (handle) => [
  handle(fillPizzaData, (prevState, action) => {
    const { pizzas, ingredients } = prevState;
    const { payload } = action;
    const { entities } = payload;
    const { pizzas: newPizzas, ingredients: newIngredients } = entities;
    return {
      pizzas: {
        ...pizzas,
        ...newPizzas,
      },
      ingredients: {
        ...ingredients,
        ...newIngredients,
      },
    };
  }),
]);

export default entitiesReducer;
