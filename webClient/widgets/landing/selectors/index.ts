import { AppState } from '../../../store';

export const reducerKey = 'landing';

function getState(state: AppState) {
  return state[reducerKey];
}

export function getPizzaListLoadingState(state: AppState) {
  const { pizzaList } = getState(state);
  const { allPizzasLoadingState } = pizzaList;
  return allPizzasLoadingState;
}

export function getCurrentPizzaList(state: AppState) {
  const { pizzaList, entities } = getState(state);
  const { pizzas, ingredients } = entities;
  const { allPizzas } = pizzaList;
  return allPizzas.map((next) => {
    const pizza = pizzas[next];
    const { ingredients: ingredientKeys } = pizza;
    return {
      ...pizza,
      ingredients: ingredientKeys.map((ingredient) => ingredients[ingredient]),
    };
  });
}
