import { connect } from 'react-redux';
import LoginForm from './LoginForm';
import { login } from '../../store/session/sessionOperations';
import { loginError, clearErrorMessage} from '../../store/session/sessionActions';

const mapDispatchToProps = dispatch => ({
login: username => dispatch(login(username)),
  loginError: () => dispatch(loginError('Username is not valid.')),
  clearErrorMessage: () => dispatch(clearErrorMessage()),
});

export default connect(null, mapDispatchToProps)(LoginForm);
