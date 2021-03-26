import React from 'react';
import Header from '../components/Header/index';
import BookList from '../components/BookList';

const BooksPage = () => (
  <>
    <Header />
    <main className="page-book container">
    <BookList />
    </main>
  </>
);

export default BooksPage;
