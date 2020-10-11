import { createReducer } from 'deox';
import {
  closeAuthModal, openAuthModal, updateAuthorizeLogin, updateAuthorizePassword,
} from '../actions/init';

const authorizeDefaultState: {
    loginInput: string,
    passwordInput: string,
    isModalOpen: boolean,
} = {
  isModalOpen: false,
  loginInput: '',
  passwordInput: '',
};
export type AuthorizeState = typeof authorizeDefaultState;
const authorizeReducer = createReducer(authorizeDefaultState, (handle) => [
  handle(openAuthModal, (prevState) => ({
    ...prevState,
    isModalOpen: true,
  })),
  handle(closeAuthModal, (prevState) => ({
    ...prevState,
    isModalOpen: false,
  })),
  handle(updateAuthorizeLogin, (prevState, action) => {
    const { payload: loginInput } = action;
    return ({
      ...prevState,
      loginInput,
    });
  }),
  handle(updateAuthorizePassword, (prevState, action) => {
    const { payload: passwordInput } = action;
    return ({
      ...prevState,
      passwordInput,
    });
  }),
]);

export default authorizeReducer;
