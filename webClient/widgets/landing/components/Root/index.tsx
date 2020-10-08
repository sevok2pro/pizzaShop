import React, { FC } from 'react';
import PizzaList from '../../containers/pizzaList';

const Root: FC = () => (
  <div>
    <div>
      pizza shop header
    </div>
    <div>
      <PizzaList />
    </div>
  </div>
);

export default Root;
