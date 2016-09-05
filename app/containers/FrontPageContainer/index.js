import { connect } from 'react-redux';
import FrontPage from '../../components/FrontPage';
import { adminLogin } from './actions';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  onLoginClick: () => {
    dispatch(adminLogin());
  },
});

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(FrontPage);
