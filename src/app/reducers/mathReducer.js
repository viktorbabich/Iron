const mathReducer = (state = {
	age: 24
}, action) => {
	switch (action.type) {
		case "ADD": 
			state = {
				...state,
				age: action.payload + state.age
			}
			break;
	}
	return state;
};

export default mathReducer;