import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ name, className, onClick }) => (
	<button className={className} type='button' onClick={onClick}>
		{name}
	</button>
);

Button.propTypes = {
	name: PropTypes.string,
	onClick: PropTypes.func,
	className: PropTypes.string
};

Button.defaultProps = {
	name: '',
	className: '',
	onClick: null
};
export default Button;
