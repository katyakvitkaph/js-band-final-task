import { ActionTypes } from '../session/sessionActions';
import { ActionTypes as ActionTypesBooks } from '../books/booksActions';
import { ActionTypes as ActionTypesBookDetail } from '../bookDetail/bookDetailActions';
import { ActionTypes as ActionTypesCartList } from '../cartList/cartListActions';

const initialState = {
  sessionError: '',
  booksError: null,
  bookDetailsError: null,
  purchaseBooksError: null,
};

const errors = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.LOGIN_ERROR:
    case ActionTypes.UPDATE_USER_ERROR:
      return { ...state, sessionError: payload };
    case ActionTypesBooks.BOOKS_ERROR:
      return { ...state, booksError: payload };
    case ActionTypesBookDetail.DETAILS_BOOK_ERROR:
      return { ...state, bookDetailsError: payload };
    case ActionTypesCartList.PURCHASE_BOOKS_ERROR:
      return { ...state, purchaseBooksError: payload };

    case ActionTypes.LOGIN_SUCCESS:
    case ActionTypes.UPDATE_SUCCESS:
    case ActionTypes.CLEAR_ERROR_MESSAGE:
      return { ...state, sessionError: '' };
    case ActionTypesBooks.BOOKS_SUCCESS:
      return { ...state, booksError: null };
    case ActionTypesBookDetail.DETAILS_BOOK_SUCCESS:
      return { ...state, bookDetailsError: null };
    case ActionTypesCartList.PURCHASE_BOOKS_SUCCESS:
      return { ...state, purchaseBooksError: null };

    default:
      return state;
  }
};

export default errors;
