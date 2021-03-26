import React, { useState } from 'react';
import ReactLoading from 'react-loading';

const Loader = () => {
	const [ loading ] = useState(true);

	return <ReactLoading loading={loading} type='cylon' color='orange' height='5%' width='5%' />;
};

export default Loader;
