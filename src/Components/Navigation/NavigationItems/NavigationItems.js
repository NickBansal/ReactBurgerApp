import React, { Component } from 'react';
import './NavigationItems.css'
import NavigationItem from './NavigationItem/NavigationItem'

class NavigationItems extends Component {
	render() {
		return(
			<div>
				<ul className="NavigationItems">
					<NavigationItem link='/' active>Burger Builder</NavigationItem>
					<NavigationItem link='/'>Checkout</NavigationItem>
				</ul>
			</div>
		)
	}
}

export default NavigationItems;