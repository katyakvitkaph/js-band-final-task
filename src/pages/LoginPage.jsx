import React from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import LoginForm from '../components/LoginForm/index';

const LoginPage = ({ history, location }) => (
	<div className='login-page container'>
		<LoginForm history={history} location={location} />
	</div>
);
LoginPage.propTypes = {
	history: ReactRouterPropTypes.history.isRequired,
	location: ReactRouterPropTypes.location.isRequired
};
export default LoginPage;
