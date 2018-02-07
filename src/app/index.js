import React from "react";
import { render } from "react-dom";

import {Header} from "./components/Header"
import {Exersize} from "./components/Exersize"

import './less/style.less';

class App extends React.Component {
	render() {
		return (
			<div>
				<h1></h1>
				<Header/>
				<Exersize/>
			</div>
		);
	}
}

render(<App/>, document.getElementById("app"));

