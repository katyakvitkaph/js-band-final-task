import React from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import Header from '../components/Header/index';
import BookData from '../components/BookData';

const BookPage = ({ match }) => (
  <>
    <Header />
    <main className="bookDetailPage container">
      <BookData match={match} />
    </main>
  </>
);

BookPage.propTypes = {
  match: ReactRouterPropTypes.match.isRequired,
};

export default BookPage;
