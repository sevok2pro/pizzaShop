import { connect } from 'react-redux';
import { AppState } from '../../../store';
import Authorize from '../components/Authorize';
import { getAuthorizeInputData, getIsModalOpen } from '../selectors';
import { updateAuthorizePassword, updateAuthorizeLogin, closeAuthModal } from '../actions/init';

function mapStateToProps(state: AppState) {
  const isOpen = getIsModalOpen(state);
  const authorizeInput = getAuthorizeInputData(state);
  return {
    isOpen,
    ...authorizeInput,
  };
}

const mapDispatchToProps = {
  loginChange: updateAuthorizeLogin,
  passwordChange: updateAuthorizePassword,
  onClose: closeAuthModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(Authorize);
