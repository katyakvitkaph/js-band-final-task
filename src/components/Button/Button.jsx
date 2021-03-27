import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ name, className, onClick }) => (
	<button className={className} type='button' onClick={onClick}>
		{name}
	</button>
);

Button.propTypes = {
	name: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
	className: PropTypes.string.isRequired
};
export default Button;
