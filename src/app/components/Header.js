import React from "react";

export class Header extends React.Component {
	render() {
		return (
			<nav className="navbar">
				<div className="nav__item">История</div>
				<div className="nav__item">Галерея</div>
				<div className="nav__item">Контакты</div>	
			</nav>
		);
	}
}