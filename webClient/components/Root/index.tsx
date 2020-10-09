import React, { FC } from 'react';
import {
  BrowserRouter, Switch, Route,
} from 'react-router-dom';
import LandingWidget from '../../widgets/landing';
import NavigationBar from '../../widgets/navigationBar';
import Cart from '../../widgets/cart';

const style = require('./style.css');

const Root: FC = () => (
  <BrowserRouter>
    <div>
      {NavigationBar}
    </div>
    <div className={style.contentContainer}>
      <Switch>
        <Route exact path="/">
          {LandingWidget}
        </Route>
        <Route path="/cart">
          {Cart}
        </Route>
      </Switch>
    </div>
  </BrowserRouter>
);

export const RootForRender = <Root />;
export default Root;
