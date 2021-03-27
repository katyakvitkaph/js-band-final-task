import React from 'react';
import Header from '../components/Header';
import CartData from '../components/CartData/index';

const CartPage = () => (
  <>
    <Header />
    <main className="cart-page">
      <CartData />
    </main>
  </>
);

export default CartPage;
