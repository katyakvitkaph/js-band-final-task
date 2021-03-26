import { connect } from 'react-redux';
import { isAuth, getUsername } from '../../store/session/sessionSelectors';
import Header from './Header';

const mapStateToProps = state => ({
  isAuth: isAuth(state),
  username: getUsername(state),
});

export default connect(mapStateToProps)(Header);
