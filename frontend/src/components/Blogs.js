import React, { Component } from 'react'
import { Container, Accordion, Col, Row} from 'react-bootstrap';
import { BsFillBasket2Fill} from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import Footer from './Footer';


export class Blogs extends Component {
	render() {
		return (
			<div className='wrapper'>
			<blogs>
				<div className='cap'>
				<span className='logo'>Inteligentny dom</span>
				<ul className='nav'>
					<li>Blogs</li>
					<li>Contact</li>
					</ul>
				<BsFillBasket2Fill className='shop-cart-basket' />
				<BsFillPersonFill  className='shop-cart-client' />
				</div>
				<Container>
					<Row>
						<Col md="9">
							<Accordion className='post'>
								<img className='img'
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png"
								/>
								<Accordion.Body>
									<h5>Blog post</h5>
									<p>
										dfdsgfdgfdgfdgfdgdfgfdg
									</p>
									</Accordion.Body>
							</Accordion>
							<Accordion className='post'>
								<img className='img'
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png"
								/>
								<Accordion.Body>
									<h5>Blog post</h5>
									<p>
										dfdsgfdgfdgfdgfdgdfgfdg
									</p>
									</Accordion.Body>
							</Accordion>
							<Accordion className='post'>
								<img className='img'
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png"
								/>
								<Accordion.Body>
									<h5>Blog post</h5>
									<p>
										dfdsgfdgfdgfdgfdgdfgfdg
									</p>
									</Accordion.Body>
							</Accordion>
							<Accordion className='post'>
								<img className='img'
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png"
								/>
								<Accordion.Body>
									<h5>Blog post</h5>
									<p>
										dfdsgfdgfdgfdgfdgdfgfdg
									</p>
									</Accordion.Body>
							</Accordion>
						</Col>
					</Row>
				</Container>
				<Footer />
			</blogs>
			</div>
		)
	}
}

export default Blogs