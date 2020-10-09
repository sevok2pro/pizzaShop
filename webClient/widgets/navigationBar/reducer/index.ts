import { combineReducers } from 'redux';
import entitiesReducer, { EntitiesState } from './entities';

export interface NavigationBarState {
    entities: EntitiesState,
}

export default combineReducers({
  entities: entitiesReducer,
});
