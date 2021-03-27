/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CartForm = ({ book, addBookToCart }) => {
	const [ count, setCount ] = useState(0);
	const [ totalPrice, setTotalPrice ] = useState(0);

	const handleChange = ({ target: { value } }) => {
		if (Number(value) < 0) return;
		setCount(Number(value));
		setTotalPrice(book.price * Number(value));
	};

	const handleSubmit = (e) => {
		const { id, title, price } = book;
		e.preventDefault();
		addBookToCart({ count, totalPrice, title, id, price });
		setTotalPrice(0);
		setCount(0);
	};

	return (
		book && (
			<section className='cart-section'>
				<form onSubmit={handleSubmit} className='cart-form'>
					<div className='cart-form__main'>
						<div className='cart-form__block'>
							<p className='cart-form__title'>Price</p>
							<span>${book.price.toFixed(2)}</span>
						</div>
						<div className='cart-form__block'>
							<label htmlFor='count' className='cart-form__title'>
								Count{' '}
							</label>
							<input
								id='count'
								type='number'
								className='cart-form__input'
								value={count}
								min={0}
								max={book.count}
								onChange={handleChange}
							/>
						</div>
						<div className='cart-form__block'>
							<p className='cart-form__title'>Total price</p>
							<span>${totalPrice.toFixed(2)}</span>
						</div>
					</div>
					<button type='submit' className='btn cart-form__button' disabled={count <= 0 || count > book.count}>
						Add to cart
					</button>
				</form>
			</section>
		)
	);
};

CartForm.propTypes = {
	id: PropTypes.string,
	price: PropTypes.string,
	book: PropTypes.shape.isRequired,
	addBookToCart: PropTypes.func.isRequired,
	title: PropTypes.string
};


CartForm.defaultProps = {
	title: '',
	price: '',
	id: ''
};
export default CartForm;
