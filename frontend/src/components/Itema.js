import React, { Component } from 'react'

export class Itema extends Component {
	render() {
		return (
			<div className='itema'>
				<img src={"./img/" + this.props.itema.img} />
				<h3>{this.props.itema.title}</h3>
				<p>{this.props.itema.desc}</p>
				<b>{this.props.itema.price}zl</b>
				<div className='add-to-cart' onClick={() => this.props.onAdd(this.props.itema)}>+</div>
			</div>
		)
	}
}

export default Itema