import { ActionTypes  } from '../session/sessionActions';


const initialState = {
  sessionError: '',

};

const errors = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.LOGIN_ERROR:
    case ActionTypes.UPDATE_USER_ERROR:
      return { ...state, sessionError: payload };
    case ActionTypes.LOGIN_SUCCESS:
    case ActionTypes.UPDATE_SUCCESS:
    case ActionTypes.CLEAR_ERROR_MESSAGE:
      return { ...state, sessionError: '' };
    default:
      return state;
  }
};

export default errors;
