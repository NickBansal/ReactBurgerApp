import React, { Component } from 'react';
import './NavigationItem.css'

class NavigationItem extends Component {
	render() {
		return (
			<div className="NavigationItem">
				<li><a 
				href={this.props.link}
				className={this.props.active ? 'active' : null}>
				{this.props.children}
				</a></li>
			</div>
		)
	}
}


export default NavigationItem;