import React from 'react';

export const ShowIncrement =React.memo(({ increment }) => {

	console.log('me mostre')

	return (
		<div>
			<button
				className="btn btn-primary"
				onClick={() => {
					increment(5);
				}}
			>
				INCREMENT{' '}
			</button>
		</div>
	);
});
