import React from 'react';
import { useForm } from '../../hooks/useForm';
import './effects.css';

export const FormCustomHook = () => {
	const [formValues, handleInputChange] = useForm({
		name: '',
		email: '',
		password: '',
	});

	const { name, email, password } = formValues;

	return (
		<>
			<h1> USE FORM CUSTOM HOOK: </h1>{' '}
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
			<div className="form-group">
				<input
					type="text"
					name="password"
					className="form-control"
					autoComplete="off"
					value={password}
					onChange={handleInputChange}
				/>
			</div>
		</>
	);
};
