import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CartForm = ({ id, price, title, book, addBookToCart }) => {
	const [ count, setCount ] = useState(0);
	const [ totalPrice, setTotalPrice ] = useState(0);
	console.log('id', id);
	console.log('book.bbok ,', book);


	const handleChange = ({ target: { value } }) => {
		if (Number(value) < 0) return;
		setCount({ count: Number(value), totalPrice: price * Number(value) });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		addBookToCart({ count, totalPrice, title, id });
		setTotalPrice(0);
		setCount(0);
	};

	return (
		book && (
			<section className='cart-section'>
				<form onSubmit={handleSubmit} className='cart-form'>
					<div className='cart-form__title'>
						<p className='cart-form__text'>Price</p>
						<span>${book.price.toFixed(2)}</span>
					</div>
					<label htmlFor='count' className='cart-form__title'>
						Count
						<input
							id='count'
							type='number'
							className='cart-form__input'
							value={count}
							min={0}
							max={book.count}
							onChange={handleChange}
						/>
					</label>
					<div className='cart-form__total-price'>
						<p className='cart-form__title'>Total price</p>
						<span>${totalPrice.toFixed(2)}</span>
					</div>
					<button
						type='submit'
						className='btn cart-form__button'
						disabled={count <= 0 || count > book.count}
					>
						Add to cart
					</button>
				</form>
			</section>
		)
	);
};

CartForm.propTypes = {
	id: PropTypes.string.isRequired,
	price: PropTypes.string.isRequired,
	book: PropTypes.string.isRequired,
	addBookToCart: PropTypes.func.isRequired,
	title: PropTypes.string.isRequired
};

export default CartForm;
