import * as services from '../../services/booksApi';
import { getToken } from '../session/sessionSelectors';
import  * as cartListActions from './cartListActions';
import { getCartList } from './cartListSelectors';

 const purchaseBooks = () => (dispatch, getState) => {
  const token = getToken(getState());
  if (!token) return;
  const cartList = getCartList(getState());
  const books = [];
  cartList.forEach(book => {
    for (let i = 0; i < book.count; i += 1) {
      books.push(book.id);
    }
  });

  dispatch(cartListActions.purchaseBooksRequest());
  services
    .purchaseBooks(token, { books })
    .then(() => {
      dispatch(cartListActions.purchaseBooksSuccesss());
    })
    .catch(({ message }) => {
      dispatch(cartListActions.purchaseBooksError(message));
    });
};


export default purchaseBooks;