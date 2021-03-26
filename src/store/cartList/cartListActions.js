export const ActionTypes = {
    ADD_BOOK_TO_CART: 'ADD_BOOK_TO_CART',
  
    PURCHASE_BOOKS_REQUEST: 'PURCHASE_BOOKS_REQUEST',
    PURCHASE_BOOKS_SUCCESS: 'PURCHASE_BOOKS_SUCCESS',
    PURCHASE_BOOKS_ERROR: 'PURCHASE_BOOKS_ERROR',
  };
  
  export const addBookToCart = book => ({
    type: ActionTypes.ADD_BOOK_TO_CART,
    payload: book,
  });
  
  export const purchaseBooksRequest = () => ({
    type: ActionTypes.PURCHASE_BOOKS_REQUEST,
  });
  
  export const purchaseBooksSuccesss = () => ({
    type: ActionTypes.PURCHASE_BOOKS_SUCCESS,
  });
  
  export const purchaseBooksError = error => ({
    type: ActionTypes.PURCHASE_BOOKS_ERROR,
    payload: error,
  });
  