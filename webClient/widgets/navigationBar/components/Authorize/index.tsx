import React, { FC, useState } from 'react';
import { createPortal } from 'react-dom';

const style = require('./style.css');

interface Props {
  isOpen: boolean,
  loginChange: (login: string) => void;
  passwordChange: (passwod: string) => void;
  login: string;
  password: string;
  onClose: () => void;
}

const Authorize: FC<Props> = (props) => {
  const {
    isOpen,
    login,
    loginChange,
    password,
    passwordChange,
    onClose,
  } = props;
  const [activeTab, setActiveTab] = useState('sigIn' as 'sigIn' | 'sigUp');
  if (!isOpen) {
    return null;
  }
  return createPortal(
    <div className={style.root} onClick={onClose}>
      <div className={style.contentContainer} onClick={(e) => e.stopPropagation()}>
        <div className={style.authTop}>
          <button
            type="button"
            className={`${style.authTab} ${activeTab === 'sigIn' ? style.isActive : ''}`}
            onClick={() => setActiveTab('sigIn')}
          >
            sign in
          </button>
          <button
            type="button"
            className={`${style.authTab} ${activeTab === 'sigUp' ? style.isActive : ''}`}
            onClick={() => setActiveTab('sigUp')}
          >
            sign up
          </button>
        </div>
        <div className={style.sigInFormRoot}>
          <label className={style.loginLabel} htmlFor="login">login</label>
          <input
            className={style.loginInput}
            id="login"
            type="text"
            value={login}
            onChange={(event) => {
              const { target } = event;
              const { value } = target;
              loginChange(value);
            }}
          />
          <label className={style.passwordLabel} htmlFor="password">password</label>
          <input
            className={style.passwordInput}
            id="password"
            type="password"
            value={password}
            onChange={(event) => {
              const { target } = event;
              const { value } = target;
              passwordChange(value);
            }}
          />
          <button type="submit" className={style.submitButton}>
            {activeTab === 'sigIn' && 'Sig in'}
            {activeTab === 'sigUp' && 'Sig up'}
          </button>
          <button className={style.close} type="button" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>,
    document.body,
  );
};

export default Authorize;
