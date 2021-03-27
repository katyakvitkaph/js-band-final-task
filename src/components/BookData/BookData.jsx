import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import BookCard from '../BookCard';
import CartForm from '../CartForm';

const BookData = ({ getBook, match, deleteDetailsBookFromStore }) => {
	useEffect(
		() => {
			const { id } = match.params;

			getBook(id);

			deleteDetailsBookFromStore();
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[ match]
	);

	return (
		<section className='book-data'>
			<BookCard />
			<CartForm />
		</section>
	);
};

BookData.propTypes = {
	getBook: PropTypes.func.isRequired,
	match: PropTypes.string.isRequired,
	deleteDetailsBookFromStore: PropTypes.func.isRequired
};
export default BookData;
