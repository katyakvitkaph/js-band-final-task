import React from 'react';
import PropTypes from 'prop-types';

const FilterForm = (props) => {
	const { title, price, onChange } = props;

	return (
		<form className='filters'>
			<input
				name='title'
				className='filter__search input'
				value={title}
				placeholder='search'
				type='text'
				onChange={onChange}
			/>
			<select name='price' className='filter__price' value={price} onChange={onChange}>
				<option value='Price'>Price</option>
				<option value='0'>0-25$</option>
				<option value='25'>25-50$</option>
				<option value='50'>50$+</option>
			</select>
		</form>
	);
};
FilterForm.propTypes = {
	onChange: PropTypes.func.isRequired,
	title: PropTypes.string.isRequired,
	price: PropTypes.string.isRequired
};

export default FilterForm;
