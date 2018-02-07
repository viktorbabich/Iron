import React from "react";
import { render } from "react-dom";

export class Header extends React.Component {
	render() {
		return (
			<div>
				<ul>
					<li>{ this.props.name }</li>
				</ul>
			</div>
		)
	}
}