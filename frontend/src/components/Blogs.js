import React, { Component } from 'react'
import { BsFillBasket2Fill} from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import { NavLink } from 'react-router-dom';



export class Blogs extends Component {
	render() {
		return (
			<header>
			<div className='span'>
				<span className='logo'>Inteligentny dom</span>
				<ul className='nav'>
					<li><NavLink to="/blog">Blogs</NavLink></li>
					<li>Contact</li>
					<li><NavLink to="/">Home</NavLink></li>
					</ul>
				<BsFillBasket2Fill  className='shop-cart-basket' />
				<BsFillPersonFill   className='shop-cart-client' />
				</div>
		</header>
		)
	}
}

export default Blogs