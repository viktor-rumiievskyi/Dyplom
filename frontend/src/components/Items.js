import React, { Component } from 'react'
import Itema from './Itema'

export class Items extends Component {
	render() {
		return (
			<main>
				{this.props.items.map(el =>(
					<Itema onShowItema={this.props.onShowItema} key={el.id} itema={el} onAdd={this.props.onAdd} />
				))}
			</main>
		)
	}
}

export default Items