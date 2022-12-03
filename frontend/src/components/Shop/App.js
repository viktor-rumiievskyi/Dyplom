import React from 'react'
import Footer from '../../components/Footer'
import Header from '../Header'
import Figures from '../Figures'
import {Carousel } from '../Carousel/Carousel'
import Text from '../Text'
import Items from '../Items'


class App extends React.Component {
	constructor (props) {
		super(props)
		this.state = {
			items: [
				{
					id: 1,
					title: 'Hub Hybrid (4G)',
					img: 'hh4g_m@1x.jpg',
					desc: 'Гібридна централь системи безпеки з підтримкою фотоверифікації тривог. Підтримка пристроїв Jeweller та Fibra. Підтримка Ethernet та двох сім-карток (2G/3G/4G). До 100 пристроїв у системі. До 25 пристроїв відеоспостереження. До 5 ретрансляторів радіосигналу. До 50 користувачів. До 9 груп охорони. До 32 сценаріїв автоматизації.',
					cetegory:'Hub' ,
					price: '40.00',
				},
				{
					id: 2,
					title: 'Hub Hybrid (2G)',
					img: 'hh2g_m@1x.jpg',
					desc: 'fgdfgd',
					cetegory: 'Hub' ,
					price: '30.00',
				},
				{
					id: 3,
					title: 'Hub Hybrid (2G)',
					img: 'hh2g_m@1x.jpg',
					desc: 'fgdfgd',
					cetegory: 'Hub' ,
					price: '30.00',
				},
				{
					id: 4,
					title: 'Hub Hybrid (2G)',
					img: 'hh2g_m@1x.jpg',
					desc: 'fgdfgd',
					cetegory: 'Hub' ,
					price: '30.00',
				},
			]
		}
	}

	render() {
		return (
			<div className='wrapper'>
				<Header />
				<Items items={this.state.items}/>
				<Figures />
				<Text />
				<Carousel>
					<div className='item item-1'>hgjhtjghjhgjgh</div>
					<div className='item item-2'>item 2</div>
					<div className='item item-3'>item 3</div>
				</Carousel>
				<Footer />
			</div>
		)
	}
}
export default App