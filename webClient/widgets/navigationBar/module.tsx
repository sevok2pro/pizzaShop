import React, { FC } from 'react';
import { IModule, DynamicModuleLoader } from 'redux-dynamic-modules';
import { Provider } from 'react-redux';
import { reducerKey } from './selectors';
import navigationBarReducer from './reducer';
import { init } from './actions/init';
import Root from './containers/root';
import store, { AppState } from '../../store';

function getNavigationBarModule(): IModule<Partial<AppState>> {
  return {
    id: reducerKey,
    reducerMap: {
      [reducerKey]: navigationBarReducer,
    },
    initialActions: [init() as any],
  };
}

const ModuleComponent: FC = () => (
  <Provider store={store}>
    <DynamicModuleLoader modules={[getNavigationBarModule()]}>
      <Root />
    </DynamicModuleLoader>
  </Provider>
);

export default ModuleComponent;
