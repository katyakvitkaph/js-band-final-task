import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/index';
import CartTable from '../CartTable/index';

const CartData = ({ books, purchaseBooks }) => {
  console.log('bboks', books);
  return (
    <section className="cart-data container">
   
      {!books.length ? (
        <div className="cart-data__wrapper">
          <h2 className="cart-data__wrapper-text">
            Your shopping cart is empty...
          </h2>
        </div>
      ) : (
        <>
          <CartTable books={books} />
          <p className="cart-data__total-price">
            Total price: $
            {Number(
              books.reduce((sum, book) => sum + book.totalPrice, 0),
            ).toFixed(2)}
          </p>
          <Button
        className="btn cart-data__btn"
        name="Purchase"
        disabled={!books.length}
        type="button"
        onClick={purchaseBooks}
      />
        </>
      )}
    </section>
  );
};

CartData.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      totalPrice: PropTypes.number.isRequired,
    }).isRequired,
  ),
  purchaseBooks: PropTypes.func.isRequired,
};

CartData.defaultProps = {
  books: [],
};

export default CartData;
