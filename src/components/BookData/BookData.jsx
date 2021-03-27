import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Loader from '../Loader/index';
import BookCard from '../BookCard';
import CartForm from '../CartForm';

const BookData = ({ isLoading, getBook, match, deleteDetailsBookFromStore }) => {
	useEffect(() => {
		const { id } = match.params;

		getBook(id);

		deleteDetailsBookFromStore();
	});

	return (
		<section className='book-data'>
			{isLoading && <Loader />}
			<BookCard />
			<CartForm />
		</section>
	);
};

BookData.propTypes = {
	getBook: PropTypes.func.isRequired,
	isLoading: PropTypes.bool.isRequired,
	match: PropTypes.string.isRequired,
	deleteDetailsBookFromStore: PropTypes.func.isRequired
};
export default BookData;
