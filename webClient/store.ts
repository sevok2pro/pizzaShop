import { createStore, IModuleStore } from 'redux-dynamic-modules';
import { getThunkExtension } from 'redux-dynamic-modules-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';

import { reducerKey } from './widgets/landing/selectors';
import { LandingState } from './widgets/landing/reducer';

export interface AppState {
    [reducerKey]: LandingState
}

const store: IModuleStore<Partial<AppState>> = createStore({
  initialState: {},
  enhancers: [],
  extensions: [getThunkExtension()],
  advancedComposeEnhancers: composeWithDevTools({}),
});

export default store;
