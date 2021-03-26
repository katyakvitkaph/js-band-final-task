import React from 'react';
import Header from '../components/Header/index';
import BookList from '../components/BookList';
import FilterForm from '../components/FilterForm/index';

const BooksPage = () => (
  <>
    <Header />
    <main className="page-book container">
      <FilterForm />
      <BookList />
    </main>
  </>
);

export default BooksPage;
