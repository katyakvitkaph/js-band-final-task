import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ name, className }) => (
	<button className={className} type='button'>
		{name}
	</button>
);

Button.propTypes = {
	name: PropTypes.string.isRequired,
	className: PropTypes.string.isRequired
};
export default Button;
