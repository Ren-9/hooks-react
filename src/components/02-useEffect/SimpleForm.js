import React, { useEffect, useState } from 'react';
import './effects.css';
import { Message } from './Message';

export const SimpleForm = () => {
	const [FormState, setFormState] = useState({
		name: '',
		email: '',
	});

	const { name, email } = FormState;

	useEffect(() => {}, []);

	useEffect(() => {}, [FormState]);
	useEffect(() => {}, [email]);


	const handleInputChange = ({ target }) => {
		setFormState({
			...FormState,
			[target.name]: target.value,
		});
	};

	return (
		<>
			<h1> USE EFFECT: </h1>{' '}
			<div className="form-group">
				<input
					type="text"
					name="name"
					className="form-control"
					autoComplete="off"
					value={name}
					onChange={handleInputChange}
				/>
			</div>
			<div className="form-group">
				<input
					type="text"
					name="email"
					className="form-control"
					autoComplete="off"
					value={email}
					onChange={handleInputChange}
				/>
			</div>
			{name === '123' && <Message />}
		</>
	);
};
