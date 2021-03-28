import React, { useState, useCallback } from 'react';
import './effects.css';
import { ShowIncrement } from './ShowIncrement';

export const CallBackHook = () => {
	const [counter, setCounter] = useState(10);
	// const increment = () => {
	// 	setCounter(counter + 1);
	// };

	const increment = useCallback((num) => {
		setCounter(c=>c + num);
	}, [setCounter]);

	return (
		<div>
			<h1> Callback HOOOK </h1>
			<hr />
			<h2>COUNTER: {counter}</h2>

			<ShowIncrement increment={increment} />
		</div>
	);
};
