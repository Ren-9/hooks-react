import React ,{useReducer} from 'react'
import './effects.css'
export const TodoApp = () => {

	const [state, dispatch] = useReducer(reducer, initialState, init)

	return (
		<div>
			<h1>TODOAPP </h1>
		</div>
	)
}
