import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getToken } from '../../store/session/sessionSelectors';

const AuthRoute = ({ component: Component, token, ...rest }) => (
	<Route {...rest} render={(props) => (token ? <Component {...props} /> : <Redirect to='/login' />)} />
);

AuthRoute.propTypes = {
	component: PropTypes.func.isRequired,
	token: PropTypes.string
};

AuthRoute.defaultProps = {
	token: null
};

const mapStateToProps = (state) => ({
	token: getToken(state)
});

export default connect(mapStateToProps)(AuthRoute);
