import { connect } from 'react-redux';
import { isAuth, getUsername } from '../../store/session/sessionSelectors';
import { logout } from '../../store/session/sessionActions';

import { getTotalCartCount } from '../../store/cartList/cartListSelectors';
import Header from './Header';

const mapStateToProps = state => ({
  isAuth: isAuth(state),
  username: getUsername(state),
  count: getTotalCartCount(state),
});

const mapDispatchToProps = dispatch => ({
  handleLogout: () => {
    dispatch(logout());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
