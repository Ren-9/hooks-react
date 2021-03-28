console.log('hello');


const initialState = [{
	id: 1,
	todo: 'Comer PAn',
	donde: false
}];


const todoReducer = (state = initialState, action) => {
	
	if (action?.type === 'POST') {
		return [...state, action.payload];
	}

	return state;
}

let todos = todoReducer();

const newTodo = {
	id: 2,
	todo: 'Comer LECHE',
	donde: false
}

const postTodo = {
	type: 'POST',
	payload: newTodo
};

todos = todoReducer(todos, postTodo);


console.log(todos)