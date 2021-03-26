export const ActionTypes = {
  BOOKS_REQUEST: 'BOOKS_REQUEST',
  BOOKS_SUCCESS: 'BOOKS_SUCCESS',
  BOOKS_ERROR: 'BOOKS_ERROR',
  BOOKS_PAGE: 'BOOKS_PAGE',
};

export const getBooksRequest = () => ({
  type: ActionTypes.BOOKS_REQUEST,
});

export const getBooksSuccess = response => ({
  type: ActionTypes.BOOKS_SUCCESS,
  payload: response,
});

export const getBooksError = error => ({
  type: ActionTypes.BOOKS_ERROR,
  payload: error,
});

export const getPage = number => ({
  type: ActionTypes.BOOKS_SUCCESS,
  payload: number,
});
