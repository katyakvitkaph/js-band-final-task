import { ActionTypes } from './booksActions';

const books = (state = [], { type, payload }) => {
  switch (type) {
    case ActionTypes.BOOKS_SUCCESS:
      return payload;
    case ActionTypes.BOOKS_PAGE:
      return payload;
    default:
      return state;
  }
};

export default books;
