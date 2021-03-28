import {
	useState
} from 'react';

export const useCounter = (initialState = 1) => {
	const [counter, setCounter] = useState(initialState)
	
	const increment = (fact = 1) => {
		setCounter(counter + fact);
	}

	const decrement = (fact = 1) => {
		setCounter(counter - fact);
	}

	const reset = (fact = 0) => {
		setCounter(0);
	}

	return {
		counter,
		increment,
		decrement,
		reset
	};
}