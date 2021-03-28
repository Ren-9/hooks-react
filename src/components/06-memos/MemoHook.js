import React, { useState, useMemo } from 'react';
import { processHard } from '../../helpers/ProcessHard';
import { useCounter } from '../../hooks/useCounter';

import './effects.css';

export const MemoHook = () => {
	const { counter, increment } = useCounter(5000);
	const [show, setShow] = useState(true);


	const processMemo = useMemo(() => processHard(counter), [counter])


	return (
		<div>
			<h1>Memoriza HOOK</h1>
			<hr />
			<h1>Counterr : {counter}</h1>

			{processMemo}
			<button
				className="btn btn-primary"
				onClick={() => {
					increment(1);
				}}
			>
				+1
			</button>

			<button
				className="btn btn-primary"
				onClick={() => {
					setShow(!show);
				}}
			>
				Show/HIDE {JSON.stringify(show)}
			</button>
		</div>
	);
};
