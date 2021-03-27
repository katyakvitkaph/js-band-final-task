import { ActionTypes } from './cartListActions';

const cartList = (state = [], { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_BOOK_TO_CART: {
      const cartBookToUpdate = state.some(book => book.id === payload.id);
      return cartBookToUpdate
        ? state.map(book =>
            book.id === payload.id
              ? {
                  ...book,
                  count: book.count + payload.count,
                  totalPrice: book.totalPrice + payload.totalPrice,
                }
              : book,
          )
        : [...state, payload];
    }
    case ActionTypes.PURCHASE_BOOKS_SUCCESS:
      return [];
    default:
      return state;
  }
};

export default cartList;
