import { createStore, IModuleStore } from 'redux-dynamic-modules';
import { getThunkExtension } from 'redux-dynamic-modules-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';

import { reducerKey as landingReducerKey } from './widgets/landing/selectors';
import { LandingState } from './widgets/landing/reducer';

import { reducerKey as navigationBarReducerKey } from './widgets/navigationBar/selectors';
import { NavigationBarState } from './widgets/navigationBar/reducer';

export interface AppState {
    [landingReducerKey]: LandingState,
    [navigationBarReducerKey]: NavigationBarState,
}

const store: IModuleStore<Partial<AppState>> = createStore({
  initialState: {},
  enhancers: [],
  extensions: [getThunkExtension()],
  advancedComposeEnhancers: composeWithDevTools({}),
});

export default store;
