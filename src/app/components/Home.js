import React, { Component } from "react";
import { Link } from "react-router-dom"
import { render } from "react-dom";

export default class Home extends Component {
	render() {
		return (
			<div className="container">
				<h1>Домашняя страница</h1>
					<Link to="/add-exersize">Добавить</Link>
			</div>
		)
	}
}