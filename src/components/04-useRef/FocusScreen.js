import React,{useRef} from 'react';
import './effects.css';

export const FocusScreen = () => {
	const inputRef = useRef();
	const handleClick = () => {
		inputRef.current.select();
	};

	return (
		<div>
			<h1> FOCUS SCREEN COMPONENT </h1>
			<hr />
			<div className="form-group">
				<input
					ref={inputRef}
					type="text"
					name="email"
					className="form-control"
					autoComplete="off"
					// value={email}
					// onChange={handleInputChange}
				/>
			</div>
			<button className="btn mt-3 btn-primary" onClick={handleClick}>
				PREV
			</button>
		</div>
	);
};
