import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import LoginPage from '../../pages/LoginPage';
import BooksPage from '../../pages/BooksPage';
import { getToken } from '../../store/session/sessionSelectors';

const App = () => {
	return (
		<Switch>
			<Redirect exact from='/' to='/signin' />
			<Route exact path='/signin' component={LoginPage} />
			<Route path='/books' component={BooksPage} type='private' />
		</Switch>
	);
};

const mapStateToProps = (state) => ({
	token: getToken(state)
});

export default connect(mapStateToProps)(App);
