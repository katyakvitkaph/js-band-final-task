import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ name,type }) => (
	<button type={type} className='common-btn'>
		{name}
	</button>
);

Button.propTypes = {
	name: PropTypes.string.isRequired
};
export default Button;
