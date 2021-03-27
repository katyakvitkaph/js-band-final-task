import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import LoginPage from '../../pages/LoginPage';
import BooksPage from '../../pages/BooksPage';
import BookDetailPage from '../../pages/BookDetailPage';
import CartPage from '../../pages/CartPage';
import AuthRoute from '../../HOC/AuthRoute/index';
import { getToken } from '../../store/session/sessionSelectors';
import { updateUser } from '../../store/session/sessionOperations';
import NotFoundPage from '../../pages/NotFoundPage';

const App = ({ token }) => {
	useEffect(() => {
		// eslint-disable-next-line no-unused-expressions
		token && updateUser();
	});

	return (
		<Switch>
			<Redirect exact from='/' to='/login' />
			<Route exact path='/login' component={LoginPage} />
			<AuthRoute exact path='/catalog' component={BooksPage} />
			<AuthRoute exact path='/catalog/:id' component={BookDetailPage} />
			<AuthRoute exact path='/cart' component={CartPage} />
			<Route path='*' component={NotFoundPage} /> 
		</Switch>
	);
};

const mapStateToProps = (state) => ({
	token: getToken(state)
});

const mapStateDispatchToProps = {
	updateUser
};

App.propTypes = {
	token: PropTypes.string.isRequired
};

export default connect(mapStateToProps, mapStateDispatchToProps)(App);
