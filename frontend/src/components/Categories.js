import React, { Component } from 'react'

export class Categories extends Component {
	constructor(props) {
		super(props)
		this.state = {
			categories: [
				{
					key: 'all',
					name: 'Wszystkie'
				},
				{
					key: 'Hub',
					name: 'Hub'
				},
				{
					key: 'Czujniki wycieku wody',
					name: 'Czujniki wycieku wody'
				},
				{
					key: 'Czujniki Ruhu',
					name: 'Czujniki Ruhu'
				},
				{
					key: 'Syreny',
					name: 'Syreny'
				},
			]
		}
	}
	render() {
		return (
			<div className='categories'>
				{this.state.categories.map(el => (
					<div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>{el.name}</div>
				))}
			</div>
		)
	}
}

export default Categories