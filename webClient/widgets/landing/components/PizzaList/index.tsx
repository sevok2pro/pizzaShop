import React, { FC } from 'react';
import { getCurrentPizzaList, getPizzaListLoadingState } from '../../selectors';

const style = require('./style.css');

interface Props {
    pizzas: ReturnType<typeof getCurrentPizzaList>
    loadingState: ReturnType<typeof getPizzaListLoadingState>
}

const PizzaList: FC<Props> = ((props) => {
  const { pizzas, loadingState } = props;
  if (loadingState === 'pending') {
    return <div>loading...</div>;
  }
  return (
    <div className={style.root}>
      {pizzas.map((next) => {
        const { name, _id, photo } = next;
        return (
          <div key={_id} className={style.singlePizzaContainer}>
            <div className={style.photoContainer}>
              <img src={photo} alt="" />
            </div>
            <div>{name}</div>
          </div>
        );
      })}
    </div>
  );
});

export default PizzaList;
