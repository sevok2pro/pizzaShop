import { combineReducers } from 'redux';
import entitiesReducer, { EntitiesState } from './entities';
import pizzaListReducer, { PizzaListState } from './pizzaList';

export interface LandingState {
    entities: EntitiesState,
    pizzaList: PizzaListState,
}

export default combineReducers({
  entities: entitiesReducer,
  pizzaList: pizzaListReducer,
});
