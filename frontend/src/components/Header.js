import React, { useState } from 'react'
import { BsFillBasket2Fill} from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import { NavLink } from 'react-router-dom';
import Order from './Order';

const showOrders = (props) => {
	let summa = 0
	props.orders.forEach(el => summa += Number.parseFloat(el.price))
	return (<div>
		{props.orders.map(el => (
					<Order onDelete={props.onDelete} key={el.id} itema={el} />
					))}
							<p className='summa'>Suma: {new Intl.NumberFormat().format(summa)}zl</p>
	</div>)
}

const showNothing = () => {
	return  (<div className='empty'>
				<h2>Brak dostępnych towarów</h2>
	</div>)
}

export default function Header (props) {
	let [cartOpen, setCartOpen] = useState (false)
	return (
		<header>
			<div>
				<div className='logo'>Inteligentny dom</div>
				<ul className='nav'>
					<li><NavLink to ="/blog">Blogs</NavLink></li>
					<li>Contact</li>
					</ul>
				<BsFillBasket2Fill onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shop-cart-basket ${cartOpen && 'active'}`} />
				<NavLink to ="/login"><BsFillPersonFill   className='shop-cart-client' /></NavLink>
				{cartOpen && (
					<div className='shop-cart'>
						{props.orders.length > 0 ?
						showOrders(props) : showNothing()}
					</div>
				)}

			</div>
			<div className='presentation'></div>
		</header>
	)
}

