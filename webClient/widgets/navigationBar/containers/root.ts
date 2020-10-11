import { connect } from 'react-redux';
import { AppState } from '../../../store';
import Root from '../components/Root';
import { openAuthModal } from '../actions/init';

function mapStateToProps(state: AppState) {
  return {};
}

const mapDispatchToProps = {
  openAuthModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(Root);
