import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

import Home from "./components/Home"
import Program from "./components/Program"
import AddExersize from "./components/AddExersize"

import './less/style.less';

class App extends React.Component {
	render() {
		return (
			<Router>
				<div>
					<Switch>
						<Route exact path="/" component={Home}/>
						<Route path="/home" component={Home}/>
						<Route path="/program" component={Program}/>
						<Route path="/add-exersize" component={AddExersize}/>
					</Switch>
				</div>
			</Router>
		);
	}
}

render(<App/>, document.getElementById("app"));

