import React from 'react';

import './Backdrop.css';

const Backdrop = (props) => {
	const { show, closed } = props;
	const cssClasses = ['Backdrop', show ? 'BackdropOpen' : 'BackdropClosed'];

	return <div onClick={closed} className={cssClasses.join(' ')} role="none" />;
};

export default Backdrop;
