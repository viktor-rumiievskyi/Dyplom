import React, { Component } from 'react'

export class Itema extends Component {
	render() {
		return (
			<div className='itema'>
				<img src={"./img/" + this.props.itema.img} />
				<h3>{this.props.itema.title}</h3>
				<p>{this.props.itema.desc}</p>
				<b>{this.props.itema.price}zl</b>
				<h2 className='add-to-cart'>+</h2>
			</div>
		)
	}
}

export default Itema