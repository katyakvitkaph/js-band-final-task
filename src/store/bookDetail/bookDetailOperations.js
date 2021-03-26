import * as services from '../../services/booksApi';
import * as bookDetailActions from './bookDetailActions';
import { getToken } from '../session/sessionSelectors';

 const getBook = id => (dispatch, getState) => {
  const token = getToken(getState());
  if (!token) return;
  dispatch(bookDetailActions.getDetailsBookRequest());
  services
    .getDetailBook(token, id)
    .then(({ data }) => dispatch(bookDetailActions.getDetailsBookSuccesss(data)))
    .catch(({ message }) => {
      dispatch(bookDetailActions.getDetailsBookError(message));
    });
};

export default getBook;