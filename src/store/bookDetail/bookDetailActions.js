export const ActionTypes = {
    DETAILS_BOOK_REQUEST: 'DETAILS_BOOK_REQUEST',
    DETAILS_BOOK_SUCCESS: 'DETAILS_BOOK_SUCCESS',
    DETAILS_BOOK_ERROR: 'DETAILS_BOOK_ERROR',
  
    DELETE_DETAILS_BOOK_FROM_STORE: 'DELETE_DETAILS_BOOK_FROM_STORE',
  };
  
  export const getDetailsBookRequest = () => ({
    type: ActionTypes.DETAILS_BOOK_REQUEST,
  });
  
  export const getDetailsBookSuccesss = response => ({
    type: ActionTypes.DETAILS_BOOK_SUCCESS,
    payload: response,
  });
  
  export const getDetailsBookError = error => ({
    type: ActionTypes.DETAILS_BOOK_ERROR,
    payload: error,
  });
  
  export const deleteDetailsBookFromStore = () => ({
    type: ActionTypes.DELETE_DETAILS_BOOK_FROM_STORE,
  });
  