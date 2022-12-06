import React, { Component } from 'react'

export class Itema extends Component {
	render() {
		return (
			<div className='itema'>
				<img src={"./img/" + this.props.itema.img} onClick={() => this.props.onShowItema(this.props.itema)} />
				<h3>{this.props.itema.title}</h3>
				<b>{this.props.itema.price}zl</b>
				<div className='add-to-cart' onClick={() => this.props.onAdd(this.props.itema)}>+</div>
			</div>
		)
	}
}

export default Itema