import React from 'react';
import PropTypes from 'prop-types';
import Loader from '../Loader/index';

const BookCard = ({ book }) =>
	book ? (
		<section className='book-card'>
			<div className='book-card__image-block'>
				<img alt='book' src={book.cover} className='book-card__image' />{' '}
				<p className='description'>{book.description}</p>
			</div>
			<div className='book-card__feature-block'>
				<h4 className='book-title'>{book.title}</h4>
				<p className='book-author'>{book.author}</p>
				<p className='tags'>
					{book.tags.map((tag) => (
						<span className='tag' key={tag}>
							{tag}
						</span>
					))}
				</p>
			</div>
		</section>
	) : (
		<Loader />
	);

BookCard.propTypes = {
	book: PropTypes.shape({
		cover: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		author: PropTypes.string.isRequired,
		level: PropTypes.string.isRequired,
		tags: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
		description: PropTypes.string.isRequired
	})
};

BookCard.defaultProps = {
	book: null
};

export default BookCard;
