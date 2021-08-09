import { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

import classes from './CssTransitionedModal.module.css';

const animationTiming = {
	enter: 300,
	exit: 500,
};

const CssTransitionedModal = (props) => {
	const { show, closed } = props;
	const modalRef = useRef();

	return (
		<CSSTransition
			mountOnEnter
			unmountOnExit
			in={show}
			timeout={animationTiming}
			nodeRef={modalRef}
			classNames={{
				enterActive: classes.ModalOpen,
				exitActive: classes.ModalClosed,
			}}
		>
			<div ref={modalRef} className={classes.Modal}>
				<h1>A Modal</h1>
				<button type="button" className="Button" onClick={closed}>
					Dismiss
				</button>
			</div>
		</CSSTransition>
	);
};

export default CssTransitionedModal;
