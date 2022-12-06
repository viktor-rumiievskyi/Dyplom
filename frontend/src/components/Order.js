import React, { Component } from 'react'
import { AiTwotoneDelete} from "react-icons/ai";

export class Order extends Component {
	render() {
		return (
			<div className='itema'>
				<img src={"./img/" + this.props.itema.img} />
				<h3>{this.props.itema.title}</h3>
				<p>{this.props.itema.price}zl</p>
				<AiTwotoneDelete className='delete-icon' onClick={() => this.props.onDelete(this.props.itema.id)} />
			</div>
		)
	}
}

export default Order