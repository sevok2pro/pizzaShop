import React, { FC } from 'react';
import NumericInput from 'react-numeric-input';
import { getCurrentPizzaList, getPizzaListLoadingState } from '../../selectors';

const style = require('./style.css');
const { default: cart } = require('../../../navigationBar/components/Root/cart.png');

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
        const {
          name, _id, photo, ingredients,
        } = next;
        return (
          <div key={_id} className={style.singlePizzaContainer}>
            <div className={style.photoContainer}>
              <img src={photo} alt="" />
            </div>
            <div className={style.bottomContainer}>
              <div className={style.pizzaInfoColumn}>
                <div className={style.name}>
                  {name}
                </div>
                <div className={style.ingredientsCapture}>
                  Ingridients:
                </div>
                <div className={style.ingredients}>
                  {ingredients.map(({ name: ingredientName }) => ingredientName).join(', ')}
                </div>
              </div>
              <div className={style.buyPizzaColumn}>
                  <div className={style.buyInputContainer}>
                      <NumericInput
                          className={style.buyInput}
                          min={0}
                          max={100}
                          format={(v) => Math.floor(v).toString()}
                      />
                  </div>
                <div className={style.cartContainer}>
                  <img src={cart} alt="" />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
});

export default PizzaList;
