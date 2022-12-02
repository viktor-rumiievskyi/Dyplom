import React, { Component } from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Figures from '../Figures'
import {Carousel } from '../Carousel/Carousel'
import Text from '../Text'


export default class App extends Component {
	render() {
		return (
			<div className='wrapper'>
				<Header />
				<Figures />
				<Text />
				<Carousel>
					<div className='item item-text'>hgjhtjghjhgjgh</div>
					<div className='item item-1'>hgjhtjghjhgjgh</div>
					<img class="item item-image" src="" alt=""/>

					<div className='item item-2'>item 2</div>
					<div className='item item-3'>item 3</div>
				</Carousel>
				<Footer />
			</div>
		)
	}
}