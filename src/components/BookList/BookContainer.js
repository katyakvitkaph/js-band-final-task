import { connect } from 'react-redux';
import { getGetBooksLoading } from '../../store/loading/loadingSelectors';
import getBooksList from '../../store/books/booksOperations';
import getBooks from '../../store/books/booksSelectors';
import BookList from './BookList';

const mapStateToProps = state => ({
  books: getBooks(state),
  isLoading: getGetBooksLoading(state),
});

const mapDispatchToProps = dispatch => ({
  getBooks: () => dispatch(getBooksList()),
});

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
