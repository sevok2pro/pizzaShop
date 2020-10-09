import React, { FC } from 'react';
import { Link } from 'react-router-dom';

const style = require('./style.css');
const { default: logo } = require('./popizzaLogo.png');
const { default: cart } = require('./cart.png');

const Root: FC = () => (
  <div className={style.root}>
    <div className={style.topBar}>
      <div className={style.imageContainer}>
        <Link
          to="/"
        >
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className={style.cartContainer}>
        <Link
          to="/cart"
        >
          <img className={style.cartIco} src={cart} alt="" />
          <div className={style.counter}>0</div>
        </Link>
      </div>
      <div className={style.authorizeContainer}>
        <button type="button" className={style.authorizeButton}>
          Login
        </button>
      </div>
    </div>
  </div>
);

export default Root;
