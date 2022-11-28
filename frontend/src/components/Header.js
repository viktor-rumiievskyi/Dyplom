import React, { useState } from 'react'
import { BsFillBasket2Fill} from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";

export default function Header() {
	let [cartOpen, setCartOpen] = useState (false)
	return (
		<header>
			<div>
				<span className='logo'>Inteligentny dom</span>
				<ul className='nav'>
					<li>Blog</li>
					<li>Contact</li>
				</ul>
				<BsFillBasket2Fill onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shop-cart-basket ${cartOpen && 'active'}`} />
				<BsFillPersonFill className='shop-cart-client' />

				{cartOpen && (
					<div className='shop-cart'>

					</div>
				)}

			</div>
			<div className='presentation'></div>
		</header>
	)
}
