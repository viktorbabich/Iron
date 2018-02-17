import React from "react";

import { render } from "react-dom";
import { createStore, combineReducers, applyMiddleware } from "redux";

import { Provider } from 'react-redux';

import App from "./components/App"


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

const logger = (store) => (next) => (action) => {
	console.log(action);
	next(action)
}

const store = createStore(combineReducers({mathReducer, userReducer}), {}, applyMiddleware(logger));



render(
	<Provider store={ store }>
		<App/>
	</Provider>, window.document.getElementById("app"));
