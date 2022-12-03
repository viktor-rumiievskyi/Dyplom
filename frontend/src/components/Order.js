import React, { Component } from 'react'

export class Order extends Component {
	render() {
		return (
			<div className='itema'>
				<img src={"./img/" + this.props.itema.img} />
				<h3>{this.props.itema.title}</h3>
				<p>{this.props.itema.price}zl</p>
			</div>
		)
	}
}

export default Order