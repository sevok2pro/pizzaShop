import React, { FC } from 'react';
import { IModule, DynamicModuleLoader } from 'redux-dynamic-modules';
import { Provider } from 'react-redux';
import { reducerKey } from './selectors';
import landingReducer from './reducer';
import { init } from './actions/init';
import Root from './components/Root';
import store, { AppState } from '../../store';

function getLandingPageModule(): IModule<AppState> {
  return {
    id: reducerKey,
    reducerMap: {
      [reducerKey]: landingReducer,
    },
    initialActions: [init() as any],
  };
}

const ModuleComponent: FC = () => (
  <Provider store={store}>
    <DynamicModuleLoader modules={[getLandingPageModule()]}>
      <Root />
    </DynamicModuleLoader>
  </Provider>
);

export default ModuleComponent;
