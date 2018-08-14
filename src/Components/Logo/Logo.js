import React, { Component } from 'react';
import burgerLogo from '../../Assets/Images/burger-logo.png';
import './Logo.css';


class Logo extends Component {
	render () {
		return (
			<div className='Logo'>
				<img src={burgerLogo} alt="My Burger" />
			</div>
		)
	}
}


export default Logo;