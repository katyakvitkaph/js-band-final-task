import * as services from '../../services/userApi';
import * as sessionActions from './sessionActions';
import * as selectors from './sessionSelectors';

export const login = params => dispatch => {
  dispatch(sessionActions.loginRequest());
  services
    .login(params)
    .then(({ data }) => dispatch(sessionActions.loginSuccess(data)))
    .catch(({ message }) => dispatch(sessionActions.loginError(message)));
};

export const updateUser = () => (dispatch, getState) => {
  const token = selectors.getToken(getState());
  const username = selectors.getUsername(getState());
  if (!token || !username) return;

  dispatch(sessionActions.updateUserRequest());
  services
    .login({ username })
    .then(({ data }) => dispatch(sessionActions.updateUserSuccess(data)))
    .catch(({ message }) => dispatch(sessionActions.updateUserError(message)));
};
