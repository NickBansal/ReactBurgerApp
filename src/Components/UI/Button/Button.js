import React, { Component } from 'react';
import './Button.css';


class Button extends Component {
	render() {
		return (
			<div>
				<button className="Button" onClick={this.props.clicked}>
				{this.props.children}
				</button>
			</div>
		)
	}
}

export default Button;