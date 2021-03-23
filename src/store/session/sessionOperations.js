import * as api from '../../services/userApi';
import  * as sessionActions from './sessionActions';

export const login = params => dispatch => {
  dispatch(sessionActions.loginRequest());
  api
    .login(params)
    .then(( {data} ) => dispatch(sessionActions.loginSuccess(data)))
    .catch(({ message }) => dispatch(sessionActions.loginError(message)))

};
