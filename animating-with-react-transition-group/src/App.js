import { useState } from 'react';

// import Modal from './components/Modal/Modal';
import CssTransitionedModal from './components/Modal/CssTransitionedModal';
import Backdrop from './components/Backdrop/Backdrop';
import ListComponent from './components/List/ListComponent';

function App() {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModalHandler = () => {
		setIsModalOpen(true);
	};
	const closeModalHandler = () => {
		setIsModalOpen(false);
	};

	return (
		<div className="App">
			<h1>React Animations</h1>
			<CssTransitionedModal closed={closeModalHandler} show={isModalOpen} />
			{isModalOpen && <Backdrop show closed={closeModalHandler} />}
			<button type="button" className="Button" onClick={openModalHandler}>
				Open Modal
			</button>
			<h3>Animating Lists</h3>
			<ListComponent />
		</div>
	);
}

export default App;
