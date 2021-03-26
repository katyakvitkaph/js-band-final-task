import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Book = ({  id,title, cover, author, price}) => (
  <>
    <img alt="book" src={cover} className="book-item__image" />
    <div className="book-item__name">
    <h4 className="book-item__name-title">{title}</h4>
    <p className="book-item__name-text">{author}</p>
    <div className="book-item__footer">
      <p className="book-item__footer-price">{price}$
      </p>
      <Link to={`/books/${id}`}>
        <button type="button" className="btn book-item__footer-btn">
          View
        </button>
      </Link>
    </div>
    </div>
  </>
);

Book.propTypes = {
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};

export default Book;
