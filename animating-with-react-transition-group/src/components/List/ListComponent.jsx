import { useState } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './ListComponent.css';

let counter = 4;

const ListComponent = () => {
	const [items, setItems] = useState([
		{
			id: 1,
			value: 1,
		},
		{
			id: 2,
			value: 2,
		},
		{
			id: 3,
			value: 3,
		},
	]);

	const addItemHandler = () => {
		setItems((prev) =>
			// eslint-disable-next-line
			prev.concat({
				id: counter,
				value: counter,
			})
		);
		counter += 1;
	};

	const removeItemHandler = (id) => {
		setItems((prev) => prev.filter((item) => item.id !== id));
	};

	return (
		<div>
			<button type="button" className="Button" onClick={addItemHandler}>
				Add Item
			</button>
			<p>Click Item to Remove.</p>
			<TransitionGroup component="ul" className="List">
				{items.map((item) => (
					<CSSTransition
						// eslint-disable-next-line react/no-array-index-key
						key={item.id}
						mountOnEnter
						unmountOnExit
						classNames={{
							enter: 'fade-enter',
							enterActive: 'fade-enter-active',
							exitActive: 'fade-exit-active',
						}}
						timeout={{
							enter: 300,
							exit: 300,
						}}
					>
						<li className="ListItem" onClick={() => removeItemHandler(item.id)}>
							{item.value}
						</li>
					</CSSTransition>
				))}
			</TransitionGroup>
		</div>
	);
};

export default ListComponent;
