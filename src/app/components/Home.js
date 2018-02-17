import React from "react";

export class Home extends React.Component {
	render() {


		return (
			<div className="container">
				<h2>Дневник тренировок { this.props.name }</h2>
				{ 
					this.props.arr.map((item, idx) => { 
						return <li key={ idx }>{ item }</li> 
					}) 
				}
				<button onClick={() => this.props.setName("Oleg")}>Жми</button>
			</div>
		)
	}
}