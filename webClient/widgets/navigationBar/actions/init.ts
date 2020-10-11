import { createAction } from 'deox';
import { ThunkAction } from '../../../utils';

export function init(): ThunkAction {
  return async () => {
    console.log('init nav bar');
  };
}

export const openAuthModal = createAction(
  'navigationBar/openAuthModal',
);

export const closeAuthModal = createAction(
  'navigationBar/closeAuthModal',
);

export const updateAuthorizeLogin = createAction(
  'navigationBar/updateAuthorizeLogin',
  (resolve) => (nextLogin: string) => resolve(nextLogin),
);

export const updateAuthorizePassword = createAction(
  'navigationBar/updateAuthorizePassword',
  (resolve) => (nextPassword: string) => resolve(nextPassword),
);
