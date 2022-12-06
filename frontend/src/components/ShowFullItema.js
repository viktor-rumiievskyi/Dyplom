import React, { Component } from 'react'


export class ShowFullItema extends Component {
	render() {
		return (
			<div className='full-itema'>
				<div>
				<img src={"./img/" + this.props.itema.img} onClick={() => this.props.onShowItema(this.props.itema)} />
				<h3>{this.props.itema.title}</h3>
				<p>{this.props.itema.desc}</p>
				<p>{this.props.itema.desc1}</p>
				<p>{this.props.itema.desc2}</p>
				<p>{this.props.itema.desc3}</p>
				<p>{this.props.itema.desc4}</p>
				<p>{this.props.itema.desc5}</p>
				<p>{this.props.itema.desc6}</p>
				<p>{this.props.itema.desc7}</p>
				<p>{this.props.itema.desc8}</p>
				<p>{this.props.itema.desc9}</p>
				<p>{this.props.itema.desc10}</p>
				<b>{this.props.itema.price}zl</b>
				<div className='add-to-cart' onClick={() => this.props.onAdd(this.props.itema)}>+</div>
				</div>
			</div>
		)
	}
}

export default ShowFullItema