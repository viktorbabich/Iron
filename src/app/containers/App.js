import React from "react";
import { Header } from "../components/Header";
import { Home } from "../components/Home";
import { connect } from "react-redux";

class App extends React.Component {
	render() {
		let arr = ["Вова", "Олег", "Саша"];
		return (
			<div>
				<Header/>
				<Home arr={ arr } name={ this.props.user.name } govno={this.props.setName.bind(this)}/>	
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		user: state.userReducer,
		math: state.mathReducer
	};
};

const mapDispatchToProps = dispatch => {
	return {
		setName: (name) => {
			dispatch({
				type: "CHANGE",
				payload: name
			})
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);