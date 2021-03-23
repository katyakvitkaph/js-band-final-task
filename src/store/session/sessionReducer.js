import { combineReducers } from 'redux';
import { ActionTypes } from './sessionActions';


const token = (state = null, { type, payload }) => {
  switch (type) {
    case ActionTypes.LOGIN_SUCCESS:
      return payload.token;
    case ActionTypes.LOGOUT:
      return null;
    default:
      return state;
  }
};


const username = (state = null, { type, payload }) => {
  switch (type) {
    case ActionTypes.LOGIN_SUCCESS:
      return payload.username;
    case ActionTypes.LOGOUT:
      return null;
    default:
      return state;
  }
};

const avatar = (state = null, { type, payload }) => {
  switch (type) {
    case ActionTypes.LOGIN_SUCCESS:
    case ActionTypes.UPDATE_USER_SUCCESS:
      return payload.avatar;
    case ActionTypes.LOGOUT:
      return null;
    default:
      return state;
  }
};

const isAuth = (state = false, { type }) => {
  switch (type) {
    case ActionTypes.LOGIN_SUCCESS:
    case ActionTypes.UPDATE_USER_SUCCESS:
      return true;
    case ActionTypes.LOGOUT:
      return false;
    default:
      return state;
  }
};

export default combineReducers({
  username,
  avatar,
  token,
  isAuth,
});
