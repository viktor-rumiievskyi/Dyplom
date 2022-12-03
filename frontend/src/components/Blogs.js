import React, { Component } from 'react'
import { BsFillBasket2Fill} from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";

export class Blogs extends Component {
	render() {
		return (
			<blog>
				<div className='app1'>
				<span className='logo'>Inteligentny dom</span>
				<ul className='nav'>
					<li>Blogs</li>
					<li>Contact</li>
					</ul>
				<BsFillBasket2Fill className='shop-cart-basket' />
				<BsFillPersonFill  className='shop-cart-client' />
				</div>
			</blog>
		)
	}
}

export default Blogs