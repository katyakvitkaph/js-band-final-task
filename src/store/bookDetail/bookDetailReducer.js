import { ActionTypes } from './bookDetailActions';

const bookDetails = (state = null, { type, payload }) => {
  switch (type) {
    case ActionTypes.DETAILS_BOOK_SUCCESS:
      return payload;
    case ActionTypes.DELETE_DETAILS_BOOK_FROM_STORE:
      return null;
    default:
      return state;
  }
};

export default bookDetails;
