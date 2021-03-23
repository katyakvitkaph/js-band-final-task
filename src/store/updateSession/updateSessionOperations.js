import * as api from '../../services/userApi';
import  * as updateSessionActions from './updateSessionActions';
import * as sessionSelectors from './updateSessionSelectors';


export const updateUser = () => (dispatch, getState) => {
  const token = sessionSelectors.getToken(getState());
  const username = sessionSelectors.getUsername(getState());
  if (!token || !username) return;

  dispatch(updateSessionActions.updateUserRequest());
  api
    .login({ username })
    .then(({ data }) => dispatch(updateSessionActions.updateUserSuccess(data)))
    .catch(({ message }) => dispatch(updateSessionActions.updateUserError(message)));
};
