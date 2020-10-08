import React, { FC } from 'react';
import { getCurrentPizzaList, getPizzaListLoadingState } from '../../selectors';

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
    <div>
      {pizzas.map((next) => {
        const { name, _id } = next;
        return (
          <div key={_id}>
            {name}
          </div>
        );
      })}
    </div>
  );
});

export default PizzaList;
