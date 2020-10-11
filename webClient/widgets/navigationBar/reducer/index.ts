import { combineReducers } from 'redux';
import entitiesReducer, { EntitiesState } from './entities';
import authorizeReducer, { AuthorizeState } from './authorize';

export interface NavigationBarState {
    entities: EntitiesState,
    authorize: AuthorizeState,
}

export default combineReducers({
  entities: entitiesReducer,
  authorize: authorizeReducer,
});
