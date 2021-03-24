import { ActionTypes } from '../session/sessionActions';

const initialState = {
  sessionLoading: false,
};

const loadings = (state = initialState, { type }) => {
  switch (type) {
    case ActionTypes.LOGIN_REQUEST:
    case ActionTypes.UPDATE_USER_REQUEST:
      return { ...state, sessionLoading: true };
    case ActionTypes.LOGIN_SUCCESS:
    case ActionTypes.UPDATE_USER_SUCCESS:
    case ActionTypes.LOGIN_ERROR:
    case ActionTypes.UPDATE_USER_ERROR:
      return { ...state, sessionLoading: false };
    default:
      return state;
  }
};

export default loadings;
