import React, { Component } from 'react'
import { Container, Row, Accordion, Col } from 'react-bootstrap';
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
				<Container>
					<Row>
						<Col md="9">
							<Accordion className="m-5">
								<img 
								width={150}
								height={150}
								className="mr-3"
								src='https://stepform.io/assets/uploads/images/dm.jpg'/>
								<Accordion.Body>
									<h5>gfbgf</h5>
									<p>
										gfdffhgfh
									</p>
								</Accordion.Body>
							</Accordion>
						</Col>
					</Row>
				</Container>
		</header>

		)
	}
}

export default Blogs