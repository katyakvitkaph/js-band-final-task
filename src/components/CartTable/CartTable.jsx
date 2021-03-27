import React from 'react';
import PropTypes from 'prop-types';

const CartTable = ({ books }) => (
	<table className='table'>
		<thead className='table__header'>
			<tr className='table__row' data-cells='header'>
				<th className='table__cell table__cell-header' scope='col'>
					Name
				</th>
				<th className='table__cell table__cell-header' scope='col'>
					Count
				</th>
				<th className='table__cell table__cell-header' scope='col'>
					Price
				</th>
				<th className='table__cell table__cell-header' scope='col'>
					Total
				</th>
			</tr>
		</thead>
		<tbody>
			{books.map((book) => (
				<tr key={book.id}>
					<td>{book.title}</td>
					<td>{book.count}</td>
					<td>{book.price}</td>
					<td>${book.totalPrice.toFixed(2)}</td>
				</tr>
			))}
		</tbody>
	</table>
);

CartTable.propTypes = {
	books: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			title: PropTypes.string.isRequired,
			count: PropTypes.number.isRequired,
			totalPrice: PropTypes.number.isRequired
		})
	)
};

CartTable.defaultProps = {
	books: []
};

export default CartTable;
