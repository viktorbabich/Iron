import React from "react";
import { render } from "react-dom";

export class ExersizeForm extends React.Component {
	render() {
		return(
			<div className="container">
				<form className="form exersize-form">
					<div className="exersize-form__inner">
						<div className="form__group">
							<label htmlFor="">Название</label>
							<input type="text"/>
						</div>
						<div className="form__group">
							<label htmlFor="">Мышечная группа</label>
							<select name="">
								<option value=""></option>
							</select>
						</div>
						<div className="form__group">
							<label htmlFor="">Категория</label>
							<select name="">
								<option value=""></option>
							</select>
						</div>
						<button className="btn">Записать</button>
					</div>
				</form>
			</div>
		)		
	}
}