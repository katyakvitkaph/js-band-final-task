import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '../Button/index';
import { ReactComponent as Logo } from '../../assest/icons/header-logo.svg';

const Header = ({ username }) => (
	<header className='header'>
		<div className='header__navigation container'>
			<h3 className='header__navigation-title'>{username}</h3>
			<Button name='Log out' type='button' className='btn logout-btn' />
		</div>
		<div className='header__functionality'>
			<div className='container header__functionality-icons'>
				<Link to='/books'>
					<Logo width='200px' height='60px' />
				</Link>
				<Link to='/cart'>
					<Button name='Cart' type='button' className='btn cart-btn' />
				</Link>
			</div>
		</div>
	</header>
);
Header.propTypes = {
	username: PropTypes.string
};

Header.defaultProps = {
	username: ''
};

export default Header;
