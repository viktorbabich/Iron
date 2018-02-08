import React from "react";
import { render } from "react-dom";

import {Header} from "./components/Header"
import {Program} from "./components/Program"

import './less/style.less';

class App extends React.Component {
	render() {
		return (
			<div>
				<Program/>
			</div>
		);
	}
}

render(<App/>, document.getElementById("app"));

