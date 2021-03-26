import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Loader from '../Loader/index';
import Book from '../Book/index';

const BookList = ({ books, getBooks, isLoading }) => {
  useEffect(() => {
    if (!books.length) getBooks();
  });
  return (
    <>
      {isLoading ? (
        <div className="bookList-loader">
          <Loader />
        </div>
      ) : (
        <div className="wrapper">
          <span>books</span>
          <ul className="books-list">
            {books.map(book => (
              <li key={book.id} className="books-list__book">
                <Book {...book} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

BookList.propTypes = {
  books: PropTypes.arrayOf.isRequired,
  getBooks: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default BookList;
