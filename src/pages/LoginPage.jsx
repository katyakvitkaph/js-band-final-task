import React from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import { ReactComponent as Logo } from '../assest/icons/logo_transparent.svg';
import LoginForm from '../components/LoginForm/index';

const LoginPage = ({ history, location }) => (
		<div className='login-page container'>
			<Logo className='logo' width='200px' height='200px' />
			<LoginForm history={history} location={location} />
		</div>
	);
LoginPage.propTypes = {
	history: ReactRouterPropTypes.history.isRequired,
	location: ReactRouterPropTypes.location.isRequired
};
export default LoginPage;
