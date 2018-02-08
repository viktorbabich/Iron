import React from "react";
import { render } from "react-dom";

import { ExersizeForm } from "./ExersizeForm";

export class Program extends React.Component {
	render() {
	let program = {
		name: "Тестовая программа",
		exersizes: [
			{
				name: "Тест 1"
			},
			{
				name: "Тест 2"
			},
			{
				name: "Тест 3"
			}
		]
	}
		return (
			<div className="container">
				<div className="program">
					<div className="program__inner">
						<h4 className="program__name">{ program.name }</h4>
						<div className="program__list">
							{ program.exersizes.map((item, i) => <li key={ i }>{ i + 1 }</li> ) }
						</div>
					</div>
				</div>
			</div>
		)
	}
}

1) тренировка

название - грудь бицепс

упражнение 

жим 

подход1

повторения 10

вес 20кг

подход2 

повторения 10

вес 20кг

подъем штанги

нужен компонент выполнение упражнения

жим

выполнение упражнения











