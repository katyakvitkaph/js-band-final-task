import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import LoginPage from '../../pages/LoginPage';
import BooksPage from '../../pages/BooksPage';
import AuthRoute from '../../HOC/AuthRoute/index';
import { getToken } from '../../store/session/sessionSelectors';

import { updateUser } from '../../store/session/sessionOperations';

const App = ({ token }) => {
	useEffect(() => {
		// eslint-disable-next-line no-unused-expressions
		token && updateUser();
	});

	return (
		<Switch>
			<Redirect exact from='/' to='/signin' />
			<Route exact path='/signin' component={LoginPage} />
			<AuthRoute exact path='/books' component={BooksPage} />
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
