export const getCartList = state => state.cartList;

export const getTotalCartCount = state =>
  state.cartList.reduce((count, book) => count + book.count, 0);
