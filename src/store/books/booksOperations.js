import * as services from '../../services/booksApi';
import * as booksActions from './booksActions';
import { getToken } from '../session/sessionSelectors';

const getBooksList = () => (dispatch, getState) => {
  const token = getToken(getState());
  if (!token) {
    return;
  }

  dispatch(booksActions.getBooksRequest());

  services
    .getBooks(token)
    .then(({ data }) => dispatch(booksActions.getBooksSuccess(data)))
    .catch(({ message }) => {
      dispatch(booksActions.getBooksError(message));
    });
};

export default getBooksList;
