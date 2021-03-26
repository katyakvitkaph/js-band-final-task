
import { getPrice, getTitleBook } from '../filters/filtersSelectors';
import filterBooks from '../filters/filtersOperators';

export const getBooks = state => state.books;

export const getFilteredBooks = state =>
  filterBooks(getBooks(state), getTitleBook(state), getPrice(state));

