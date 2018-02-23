const userReducer = (state = {
	name: "Victor"
}, action) => {
	switch (action.type) {
		case "CHANGE": 
			state = {
				...state,
				name: action.payload
			}
			break;
	}
	return state;
};

export default userReducer;