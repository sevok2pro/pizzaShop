import { createReducer } from 'deox';

// eslint-disable-next-line @typescript-eslint/ban-types
const entitiesDefaultState: {} = {};
export type EntitiesState = typeof entitiesDefaultState;
const entitiesReducer = createReducer(entitiesDefaultState, (handle) => []);

export default entitiesReducer;
