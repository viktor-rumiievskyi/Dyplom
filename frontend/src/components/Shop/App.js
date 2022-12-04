import React from 'react'
import Footer from '../../components/Footer'
import Header from '../Header'
import Figures from '../Figures'
import {Carousel } from '../Carousel/Carousel'
import Text from '../Text'
import Items from '../Items'
import Text_Items from '../Text_Items'
import Categories from '../Categories'
import ShowFullItema from '../ShowFullItema'


class App extends React.Component {
	constructor (props) {
		super(props)
		this.state = {
			orders: [],
			currentItems: [],
			items: [
				{
					id: 1,
					title: 'Hub Hybrid (4G)',
					img: 'hh4g_m@1x.jpg',
					desc: 'Гібридна централь системи безпеки з підтримкою фотоверифікації тривог. Підтримка пристроїв Jeweller та Fibra. Підтримка Ethernet та двох сім-карток (2G/3G/4G). До 100 пристроїв у системі. До 25 пристроїв відеоспостереження. До 5 ретрансляторів радіосигналу. До 50 користувачів. До 9 груп охорони. До 32 сценаріїв автоматизації.',
					category:'Hub' ,
					price: '40.00',
				},
				{
					id: 2,
					title: 'Hub Hybrid (2G)',
					img: 'hh2g_m@1x.jpg',
					desc: 'fgdfgd',
					category: 'Hub' ,
					price: '30.00',
				},
				{
					id: 3,
					title: 'Hub 2 Plus Jeweller',
					img: 'hub_1_1_m@1x.jpg',
					desc: 'fgdfgd',
					category: 'Hub' ,
					price: '30.00',
				},
				{
					id: 4,
					title: 'Hub Plus Jeweller',
					img: 'hub_1_3_xl@1x.jpg',
					desc: 'fgdfgd',
					category: 'Hubr' ,
					price: '30.00',
				},
				{
					id: 5,
					title: 'LeaksProtect',
					img: 'leaks_1_1_xl@1x.jpg',
					desc: 'fgdfgd',
					category: 'Czujniki wycieku wody' ,
					price: '30.00',
				},
				{
					id: 6,
					title: 'MotionCam (PhOD) Fibra',
					img: 'mc_ffibra_xl@1x.jpg',
					desc: 'fgdfgd',
					category: 'Czujniki Ruhu' ,
					price: '30.00',
				},
				{
					id: 7,
					title: 'MotionCam Fibra',
					img: 'mc_f_xl@1x.jpg',
					desc: 'fgdfgd',
					category: 'Czujniki Ruhu' ,
					price: '30.00',
				},
				{
					id: 8,
					title: 'MotionProtect Fibra',
					img: 'mp_f_xl@1x.jpg',
					desc: 'fgdfgd',
					category: 'Czujniki Ruhu' ,
					price: '30.00',
				},
				{
					id: 9,
					title: 'MotionCam (PhOD) Jeweller',
					img: 'mс_phod_xl@1x.jpg',
					desc: 'fgdfgd',
					category: 'Czujniki Ruhu' ,
					price: '30.00',
				},
				{
					id: 10,
					title: 'MotionCam Jeweller',
					img: 'mс_xl@1x.jpg',
					desc: 'Гібридна централь системи безпеки з підтримкою фотоверифікації тривог. Підтримка пристроїв Jeweller та Fibra. Підтримка Ethernet та двох сім-карток (2G/3G/4G). До 100 пристроїв у системі. До 25 пристроїв відеоспостереження. До 5 ретрансляторів радіосигналу. До 50 користувачів. До 9 груп охорони. До 32 сценаріїв автоматизації',
					category: 'Czujniki Ruhu' ,
					price: '30.00',
				},
				{
					id: 11,
					title: 'MotionProtect Jeweller',
					img: 'motion_detect_block1_2_xl@1x.jpg',
					desc: 'Гібридна централь системи безпеки з підтримкою фотоверифікації тривог. Підтримка пристроїв Jeweller та Fibra. Підтримка Ethernet та двох сім-карток (2G/3G/4G). До 100 пристроїв у системі. До 25 пристроїв відеоспостереження. До 5 ретрансляторів радіосигналу. До 50 користувачів. До 9 груп охорони. До 32 сценаріїв автоматизації',
					category: 'Czujniki Ruhu' ,
					price: '30.00',
				},
				{
					id: 12,
					title: 'HomeSiren Fibra',
					img: 'hsf_xl@1x.jpg',
					desc: 'fgdfgd',
					category: 'Syreny' ,
					price: '30.00',
				},
				{
					id: 13,
					title: 'StreetSiren Fibra',
					img: 'ssf_xl@1x.jpg',
					desc: 'fgdfgd',
					category: 'Syreny' ,
					price: '30.00',
				},
				{
					id: 14,
					title: 'HomeSiren Jeweller',
					img: 'hub_1_3_xl@1x.jpg',
					desc: 'fgdfgd',
					category: 'Syreny' ,
					price: '30.00',
				},
				{
					id: 15,
					title: 'StreetSiren Jeweller',
					img: 'homesiren_xl@1x.jpg',
					desc: 'fgdfgd',
					category: 'Syreny' ,
					price: '30.00',
				},
			],
			showFullItema: false,
			fullItema: {}
		}
		this.state.currentItems = this.state.items
		this.addToOrder = this.addToOrder.bind(this)
		this.deleteOrder = this.deleteOrder.bind(this)
		this.chooseCategory = this.chooseCategory.bind(this)
		this.onShowItema = this.onShowItema.bind(this)
	}

	render() {
		return (
			<div className='wrapper'>
				<Header orders={this.state.orders} onDelete={this.deleteOrder} />
				<Figures />
				<Text_Items />
				<Categories chooseCategory={this.chooseCategory} />
				<Items onShowItema={this.onShowItema} items={this.state.currentItems} onAdd={this.addToOrder}/>
				{this.state.showFullItema && <ShowFullItema onAdd={this.addToOrder} onShowItema={this.onShowItema} itema={this.state.fullItema} />}
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

	onShowItema(itema) {
		this.setState({fullItema: itema})
		this.setState({showFullItema: !this.state.showFullItema})
	}

	chooseCategory(category) {
		if(category === 'all') {
			this.setState({ currentItems: this.state.items})
			return
		}
		this.setState({
			currentItems: this.state.items.filter(el => el.category === category)
		})
	}

	deleteOrder(id) {
		this.setState({ orders: this.state.orders.filter(el => el.id !==id)})
	}


	addToOrder(itema) {
		let isInArray = false
		this.state.orders.forEach(el => {
			if(el.id === itema.id)
			isInArray = true
		})
		if(!isInArray)
		this.setState({ orders: [...this.state.orders, itema] })
	}
}

export default App