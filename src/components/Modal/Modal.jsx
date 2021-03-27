import React, { createRef } from 'react';
import PropTypes from 'prop-types';

const Modal = (props) => {
	const { children } = props;
	const ref = createRef();

	return (
		<div
			role='dialog'
			ref={ref}
			className='modal__backdrop'
		>
			<section className='modal'>{children}</section>
		</div>
	);
};
Modal.propTypes = {
	children: PropTypes.shape.isRequired
};

export default Modal;
