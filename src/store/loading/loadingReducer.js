import { ActionTypes } from '../session/sessionActions';
import { ActionTypes as ActionBookTypes } from '../books/booksActions';

const initialState = {
  sessionLoading: false,
  booksLoading: false,
};

const loadings = (state = initialState, { type }) => {
  switch (type) {
    case ActionTypes.LOGIN_REQUEST:
    case ActionTypes.UPDATE_USER_REQUEST:
      return { ...state, sessionLoading: true };
    case ActionBookTypes.BOOKS_REQUEST:
      return { ...state, booksLoading: true };

    case ActionBookTypes.BOOKS_SUCCESS:
    case ActionBookTypes.BOOKS_ERROR:
      return { ...state, booksLoading: false };
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
