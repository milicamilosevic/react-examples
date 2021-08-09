import React, { useRef } from 'react';
import { Transition } from 'react-transition-group';

import './Modal.css';

const animationTiming = {
	enter: 300,
	exit: 500,
};

const Modal = (props) => {
	const { show, closed } = props;
	const modalRef = useRef();

	return (
		<Transition
			mountOnEnter
			unmountOnExit
			in={show}
			timeout={animationTiming}
			nodeRef={modalRef}
		>
			{(state) => {
				let cssClasses;
				switch (state) {
					case 'entering':
						cssClasses = 'Modal ModalOpen';
						break;
					case 'exiting':
						cssClasses = 'Modal ModalClosed';
						break;
					default:
						cssClasses = 'Modal';
				}

				return (
					<div ref={modalRef} className={cssClasses}>
						<h1>A Modal</h1>
						<button type="button" className="Button" onClick={closed}>
							Dismiss
						</button>
					</div>
				);
			}}
		</Transition>
	);
};

export default Modal;
