import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import './counter.css';

export const CounterCustomHook = () => {
	const { state, increment, decrement, reset } = useCounter(100);
	return (
		<div>
			<h1>Counter with hook</h1>

			<h2>
				<b>{state}</b>
			</h2>
			<button
				className="btn btn-primary"
				onClick={() => {
					increment(3);
				}}
			>
				+1
			</button>
			<button
				className="btn btn-danger"
				onClick={() => {
					decrement(3);
				}}
			>
				+1
			</button>
			<button className="btn btn-danger" onClick={reset}>
				RES
			</button>
		</div>
	);
};
