import { connect } from 'react-redux';
import GroupPage from '../../components/GroupPage';
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
)(GroupPage);
