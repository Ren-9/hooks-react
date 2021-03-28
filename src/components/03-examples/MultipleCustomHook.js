import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import './effects.css';

export const MultipleCustomHook = () => {
	const { state, increment, decrement } = useCounter(1);

	const { loading, data } = useFetch(
		`https://www.breakingbadapi.com/api/quotes/${state}`
	);

	const { author, quote } = !!data && data[0];
	console.log(author, quote);
	return (
		<div>
			<h1> Breaking Bad Quotes </h1>
			<hr />
			{loading ? (
				<div className="alert alert-info text-center">loading...</div>
			) : (
				<blockquote className="blockquote text-rigt">
					<p className="mb-4"> {quote}</p>
					<footer className="blockquote-footer">{author}</footer>
				</blockquote>
			)}
			<button
				className="btn btn-primary"
				onClick={() => {
					decrement(1);
				}}
			>
				PREV
			</button>
			<button
				className="btn btn-primary"
				onClick={() => {
					increment(1);
				}}
			>
				NEXT
			</button>
		</div>
	);
};
