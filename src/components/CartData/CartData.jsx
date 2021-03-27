import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '../Button/index';
import CartTable from '../CartTable/index';
import Modal from '../Modal/index';

const CartData = ({ books, isOpenModal, modalOpen, handlePurchase }) => (
		<section className='cart-data container'>
			{!books.length ? (
				<div className='cart-data__wrapper'>
					<h2 className='cart-data__wrapper-text'>Your shopping cart is empty...</h2>
				</div>
			) : (
				<div className='cart-data__table'>
					<CartTable books={books} className='cartTable' />
					<p className='cart-data__total-price'>
						Total price: $
						{Number(books.reduce((sum, book) => sum + book.totalPrice, 0)).toFixed(2)}
					</p>
					<Button className='btn cart-data__btn' name='Purchase' type='button' onClick={isOpenModal} />

					{modalOpen && (
						<Modal books={books}>
							<h4 className='modal__title'>You successfully placed your order!</h4>
							<div className='cart-data__table'>
								<CartTable books={books} />
								<p className='cart-data__total-price'>
									Total price: $
									{Number(books.reduce((sum, book) => sum + book.totalPrice, 0)).toFixed(2)}
								</p>
							</div>
							<Link to='/catalog'>
								<Button
									type='button'
									className='btn page-not-found__btn'
									name='Back to Catalog'
									onClick={handlePurchase}
								/>
							</Link>
						</Modal>
					)}
				</div>
			)}
		</section>
	);

CartData.propTypes = {
	books: PropTypes.arrayOf(
		PropTypes.shape({
			totalPrice: PropTypes.number.isRequired
		}).isRequired
	),
	isOpenModal: PropTypes.func.isRequired,
	modalOpen: PropTypes.bool.isRequired,
	handlePurchase: PropTypes.func.isRequired
};

CartData.defaultProps = {
	books: []
};

export default CartData;
