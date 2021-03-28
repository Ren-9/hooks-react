import React, { useEffect, useState } from 'react';

export const Message = () => {
	const [coords, setCoords] = useState({ x: 0, y: 0 });
	const { x, y } = coords;
	useEffect(() => {
		const mouseMove = (e) => {
			const coord = { x: e.x, y: e.y };
			setCoords(coord);
		};

		window.addEventListener('mousemove', mouseMove);
		console.log('mestoy armando');

		return () => {
			console.log('desarmado');
			window.removeEventListener('mousemove', mouseMove);
		};
	}, []);

	return (
		<div>
			<h3> You are so cool</h3>
			<p>
				x:{x}, y:{y}
			</p>
		</div>
	);
};
