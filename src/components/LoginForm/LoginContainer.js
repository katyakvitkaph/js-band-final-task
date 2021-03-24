import {connect} from 'react-redux';
import LoginForm from './LoginForm';
import {login} from '../../store/session/sessionOperations';
import {loginError,clearErrorMessage} from '../../store/session/sessionActions';
import {
    getSessionLoading
} from '../../store/loading/loadingSelectors';
import {
    getSessionError
} from '../../store/errors/errorsSelectors';


const mapStateToProps = state => ({
    error: getSessionError(state),
    isLoading: getSessionLoading(state)
});


const mapDispatchToProps = dispatch => ({
    login: username => dispatch(login(username)),
    loginError: () => dispatch(loginError('Username is not valid.')),
    clearErrorMessage: () => dispatch(clearErrorMessage()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);