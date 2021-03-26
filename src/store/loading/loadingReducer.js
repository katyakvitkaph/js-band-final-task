import { ActionTypes } from '../session/sessionActions';
import { ActionTypes as ActionBooksTypes } from '../books/booksActions';
import { ActionTypes as ActionBookDetails } from '../bookDetail/bookDetailActions';

const initialState = {
  sessionLoading: false,
  booksLoading: false,
  detailBookLoading: false,
};

const loadings = (state = initialState, { type }) => {
  switch (type) {
    case ActionTypes.LOGIN_REQUEST:
    case ActionTypes.UPDATE_USER_REQUEST:
      return { ...state, sessionLoading: true };
    case ActionBooksTypes.BOOKS_REQUEST:
      return { ...state, booksLoading: true };
    case ActionBookDetails.GET_SELECTED_BOOK_REQUEST:
      return { ...state, detailBookLoading: true };

    case ActionBooksTypes.BOOKS_SUCCESS:
    case ActionBooksTypes.BOOKS_ERROR:
      return { ...state, booksLoading: false };
    case ActionTypes.LOGIN_SUCCESS:
    case ActionTypes.UPDATE_USER_SUCCESS:
    case ActionTypes.LOGIN_ERROR:
    case ActionTypes.UPDATE_USER_ERROR:
      return { ...state, sessionLoading: false };
    case ActionBookDetails.DETAILS_BOOK_SUCCESS:
    case ActionBookDetails.DETAILS_BOOK_ERROR:
      return { ...state, getSelectedBookLoading: false };
    default:
      return state;
  }
};

export default loadings;
