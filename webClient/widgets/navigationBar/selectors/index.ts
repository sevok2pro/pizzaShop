import { AppState } from '../../../store';

export const reducerKey = 'navigationBar';

export function getState(state: AppState) {
  return state[reducerKey];
}

export function getIsModalOpen(state: AppState) {
  const { authorize } = getState(state);
  const { isModalOpen } = authorize;
  return isModalOpen;
}

export function getAuthorizeInputData(state: AppState) {
  const { authorize } = getState(state);
  const { loginInput: login, passwordInput: password } = authorize;
  return { login, password };
}
