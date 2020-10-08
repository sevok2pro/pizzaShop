import { connect } from 'react-redux';
import { AppState } from '../../../store';
import { getPizzaListLoadingState, getCurrentPizzaList } from '../selectors';
import PizzaList from '../components/PizzaList';

function mapStateToProps(state: AppState) {
  const loadingState = getPizzaListLoadingState(state);
  const pizzas = getCurrentPizzaList(state);
  return {
    loadingState,
    pizzas,
  };
}

export default connect(mapStateToProps)(PizzaList);
