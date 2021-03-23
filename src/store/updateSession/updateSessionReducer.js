import { combineReducers } from 'redux';
import { ActionTypes } from './updateSessionActions';



const avatar = (state = null, { type, payload }) => {
  switch (type) {
    case ActionTypes.UPDATE_USER_SUCCESS:
      return payload.avatar;
    default:
      return state;
  }
};

const isAuth = (state = false, { type }) => {
  switch (type) {
    case ActionTypes.UPDATE_USER_SUCCESS:
      return true;
    default:
      return state;
  }
};

export default combineReducers({
  avatar,
  isAuth,
});
