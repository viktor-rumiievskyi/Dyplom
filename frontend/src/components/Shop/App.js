import React from 'react'
import Footer from '../Footer/index'
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
					desc: 'Panel sterowania hybrydowego systemu alarmowego umożliwiający fotograficzną weryfikację alarmów.',
					desc1: 'Zgodność z urządzeniami Jeweller i Fibra',
					desc2: 'Do 100 urządzeń',
					desc3: 'Ethernet i 2 karty SIM (2G/3G/4G)',
					desc4: 'Do 25 kamer lub urządzeń DVR',
					desc5: 'Do 5 podwajaczy zasięgu sygnału radiowego',
					desc6: 'Do 50 użytkowników',
					desc7: 'Do 9 grup bezpieczeństwa',
					desc8: 'Do 32 scenariuszy automatyzacji',
					category:'Hub' ,
					price: '100.00',
				},
				{
					id: 2,
					title: 'Hub Hybrid (2G)',
					img: 'hh2g_m@1x.jpg',
					desc: 'Panel sterowania hybrydowego systemu alarmowego umożliwiający fotograficzną weryfikację alarmów',
					desc1: 'Zgodność z urządzeniami Jeweller i Fibra',
					desc2: 'Do 100 urządzeń',
					desc3: 'Ethernet i 2 karty SIM (2G)',
					desc4: 'Do 25 kamer lub urządzeń DVR',
					desc5: 'Do 5 podwajaczy zasięgu sygnału radiowego',
					desc6: 'Do 50 użytkowników',
					desc7: 'Do 9 grup bezpieczeństwa',
					desc8: 'Do 32 scenariuszy automatyzacji',
					category: 'Hub' ,
					price: '80.00',
				},
				{
					id: 3,
					title: 'Hub 2 Plus Jeweller',
					img: 'hub_1_1_m@1x.jpg',
					desc: 'Centrala systemu alarmowego z obsługą fotograficznej weryfikacji alarmów',
					desc1: 'Zgodność z urządzeniami Jeweller',
					desc2: 'Do 200 urządzeń',
					desc3: 'Ethernet, Wi-Fi, 2 karty SIM (2G/3G/4G)',
					desc4: 'Do 100 kamer lub urządzeń DVR',
					desc5: 'Do 5 podwajaczy zasięgu sygnału radiowego',
					desc6: 'Do 200 użytkowników',
					desc7: 'Do 25 grup bezpieczeństwa',
					desc8: 'Do 64 scenariuszy automatyzacji',
					category: 'Hub' ,
					price: '130.00',
				},
				{
					id: 4,
					title: 'Hub Plus Jeweller',
					img: 'hub_1_3_xl@1x.jpg',
					desc: 'Centrala systemu alarmowego',
					desc1: 'Zgodność z urządzeniami Jeweller',
					desc2: 'Do 150 urządzeń',
					desc3: 'Ethernet, Wi-Fi, 2 karty SIM (2G/3G)',
					desc4: 'Do 50 kamer lub urządzeń DVR',
					desc5: 'Do 5 podwajaczy zasięgu sygnału radiowego',
					desc6: 'Do 99 użytkowników',
					desc7: 'Do 25 grup bezpieczeństwa',
					desc8: 'Do 64 scenariuszy automatyzacji',
					category: 'Hubr' ,
					price: '110.00',
				},
				{
					id: 5,
					title: 'LeaksProtect',
					img: 'leaks_1_1_xl@1x.jpg',
					desc: 'Bezprzewodowy czujnik wycieku wody',
					desc1: 'Instalacja bez narzędzi',
					desc2: 'Informuje o wyschnięciu wody',
					desc3: 'Wodoodporna obudowa',
					desc4: 'Do 5 lat pracy na baterii',
					desc5: 'Komunikacja z hubem na odległość do 1 300 m',
					category: 'Czujniki wycieku wody' ,
					price: '150.00',
				},
				{
					id: 6,
					title: 'MotionCam (PhOD) Fibra',
					img: 'mc_ffibra_xl@1x.jpg',
					desc: 'Przewodowy czujnik ruchu z aparatem fotograficznym',
					desc1: 'Zdjęcie z alarmu',
					desc2: 'Zdjęcie na żądanie',
					desc3: 'Zdjęcie za scenariusza',
					desc4: 'Dostarczenie zdjęcia w 9 sekund',
					desc5: 'Podświetlenie podczerwone do zdjęć w ciemności',
					desc6: 'Filtrowanie fałszywych alarmów spowodowanych ruchem',
					desc7: 'Kompensacja temperatury',
					desc8: 'Odporność na zwierzęta',
					desc9: 'Pobór prądu do 100 µA z linii Fibra',
					desc10: 'Do 2000 m dwukierunkowej komunikacji radiowej',
					category: 'Czujniki Ruhu' ,
					price: '200.00',
				},
				{
					id: 7,
					title: 'MotionCam Fibra',
					img: 'mc_f_xl@1x.jpg',
					desc: 'Przewodowy czujnik ruchu z aparatem fotograficzny',
					desc1: 'Zdjęcie z alarmu',
					desc2: 'Dostarczenie zdjęcia w 9 sekund',
					desc3: 'Podświetlenie podczerwone do zdjęć w ciemności',
					desc4: 'Filtrowanie fałszywych alarmów spowodowanych ruchem',
					desc5: 'Kompensacja temperatury',
					desc6: 'Odporność na zwierzęta',
					desc7: 'Pobór prądu do 100 µA z linii Fibra',
					desc8: 'Do 2000 m dwukierunkowej komunikacji radiowej',
					category: 'Czujniki Ruhu' ,
					price: '150.00',
				},
				{
					id: 8,
					title: 'MotionProtect Fibra',
					img: 'mp_f_xl@1x.jpg',
					desc: 'Przewodowy czujnik ruchu',
					desc1: 'Filtrowanie fałszywych alarmów spowodowanych ruchem',
					desc2: 'Kompensacja temperatury',
					desc3: 'Odporność na zwierzęta',
					desc4: 'Pobór prądu do 50 µA z linii Fibra',
					desc5: 'Do 2000 m dwukierunkowej komunikacji radiowej',
					category: 'Czujniki Ruhu' ,
					price: '120.00',
				},
				{
					id: 9,
					title: 'MotionCam (PhOD) Jeweller',
					img: 'mс_phod_xl@1x.jpg',
					desc: "Bezprzewodowy czujnik ruchu z kamerą",
					desc1: "Zdjęcie alarmowe",
					desc2: "Zdjęcie na życzenie",
					desc3: "Zdjęcie według scenariusza",
					desc4: "Dostawa zdjęć w 9 sekund",
					desc5: "Oświetlenie w podczerwieni do zdjęć w ciemności",
					desc6: "Filtrowanie fałszywych alarmów spowodowanych ruchem",
					desc7: "Kompensacja temperatury",
					desc8: "Odporność na zwierzęta",
					desc9: "Do 4 lat pracy na baterii",
					desc10: "Dwukierunkowa łączność radiowa do 1700 m",
					category: 'Czujniki Ruhu' ,
					price: '250.00',
				},
				{
					id: 10,
					title: 'MotionCam Jeweller',
					img: 'mс_xl@1x.jpg',
					desc: "Bezprzewodowy czujnik ruchu z kamerą",
					desc1: "Zdjęcie alarmowe",
					desc2: "Dostawa zdjęć w 9 sekund",
					desc3: "Oświetlenie w podczerwieni do zdjęć w ciemności",
					desc4: "Filtrowanie fałszywych alarmów spowodowanych ruchem",
					desc5: "Kompensacja temperatury",
					desc6: "Odporność zwierząt domowych",
					desc7: "Do 4 lat pracy na baterii",
					desc8: "Dwukierunkowa łączność radiowa do 1700 m",
					category: 'Czujniki Ruhu' ,
					price: '215.00',
				},
				{
					id: 11,
					title: 'MotionProtect Jeweller',
					img: 'motion_detect_block1_2_xl@1x.jpg',
					desc: "Bezprzewodowy czujnik ruchu",
					desc1: "Filtrowanie fałszywych alarmów spowodowanych ruchem",
					desc2: "Kompensacja temperatury",
					desc3: "Odporność zwierząt domowych",
					desc4: "Do 5 lat pracy na baterii",
					desc5: "Dwukierunkowa łączność radiowa do 1700 m",
					category: 'Czujniki Ruhu' ,
					price: '195.00',
				},
				{
					id: 12,
					title: 'HomeSiren Fibra',
					img: 'hsf_xl@1x.jpg',
					desc: "Kompaktowa przewodowa syrena domowa",
					desc1: "Głośność 81 do 105 dB",
					desc2: "Czas trwania sygnału od 3 do 180 sekund",
					desc3: "Zacisk dla dodatkowej diody LED",
					desc4: "Wskazanie trybów bezpieczeństwa",
					desc5: "Pobór prądu do 50 µA z linii Fibra",
					desc6: "Komunikacja z hubem na odległość do 2000 m",
					category: 'Syreny' ,
					price: '400.00',
				},
				{
					id: 13,
					title: 'StreetSiren Fibra',
					img: 'ssf_xl@1x.jpg',
					desc: "Przewodowa syrena zewnętrzna",
					desc1: "Głośność 85 do 113 dB",
					desc2: "Czas trwania sygnału od 3 do 180 sekund",
					desc3: "Ramka LED do sygnalizacji alarmów i stanu systemu",
					desc4: "Klasa ochrony obudowy IP54",
					desc5: "Kompensacja temperatury",
					desc6: "Odporność na zwierzęta",
					desc7: "Do 4 lat pracy na baterii",
					category: 'Syreny' ,
					price: '450.00',
				},
				{
					id: 14,
					title: 'HomeSiren Jeweller',
					img: 'hub_1_3_xl@1x.jpg',
					desc: "Kompaktowa bezprzewodowa syrena domowa",
					desc1: "Głośność 81 do 105 dB",
					desc2: "Czas trwania sygnału od 3 do 180 sekund",
					desc3: "Zacisk dla dodatkowej diody LED",
					desc4: "Wskazanie trybów bezpieczeństwa",
					desc5: "Do 5 lat pracy na baterii",
					desc6: "Komunikacja z hubem na odległość do 2000 m",
					category: 'Syreny' ,
					price: '500.00',
				},
				{
					id: 15,
					title: 'StreetSiren Jeweller',
					img: 'homesiren_xl@1x.jpg',
					desc: "Bezprzewodowa syrena zewnętrzna",
					desc1: "Głośność 85 do 113 dB",
					desc2: "Czas trwania sygnału od 3 do 180 sekund",
					desc3: "Ramka LED do sygnalizacji alarmów i stanu systemu",
					desc4: "Klasa ochrony obudowy IP54",
					desc5: "Do 5 lat pracy na baterii",
					desc6: "Podłączenie zewnętrznego zasilacza 12 V⎓",
					desc7: "Komunikacja z hubem na odległość do 1500 m",
					category: 'Syreny' ,
					price: '520.00',
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
					<div className='item item-1'>Kupiłem system bezpieczeństwa do mojego domu w tym sklepie. Usługa doboru urządzeń i elementów zgodnie z moimi wymaganiami jest zorganizowana w wygodny sposób.</div>
					<div className='item item-2'>Długo szukałam sprzętu do organizacji oszczędnego i uniwersalnego oświetlenia w naszym studio. Zapoznałem się z wieloma zasobami w Internecie. W tym sklepie internetowym szybko znalazłem opłacalną dla mnie opcję spośród proponowanych firm. Cały proces był łatwy i szybki.</div>
					<div className='item item-3'>Aby otworzyć firmę w innym kraju, bardzo ważne jest, aby zasoby oferujące swoje usługi były wielojęzyczne. Ta strona z powodzeniem łączyła wszystkie warunki niezbędne do współpracy z inwestycjami zagranicznymi dla mojej firmy. Zainteresowanych kontynuacją współpracy.</div>
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