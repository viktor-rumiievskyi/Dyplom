import React, { Component } from 'react'
import NumberCounter from 'number-counter'

export class Figures extends Component {
	render() {
		return (
			<div className='carousel'>
				<div className='figures'>
					<span className='number'>
						< NumberCounter end={2000000} start={1990000} delay='2' />
					</span>
					<span className='text'>Osoby korzystające z systemu inteligentnego domu</span>
				</div>
				<div className='figures'>
					<span className='number'>
						< NumberCounter end={3889660} start={3880000} delay='4' />
					</span>
					<span className='text'>Klienci w klubie</span>
				</div>
				<div className='figures'>
					<span className='number'>
						< NumberCounter end={25551241} start={25541000} delay='4' />
					</span>
					<span className='text'>Wykonane zlecenie</span>
				</div>
			</div>
		)
	}
}

export default Figures