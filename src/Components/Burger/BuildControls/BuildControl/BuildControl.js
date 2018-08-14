import React, { Component } from 'react';
import './BuildControl.css';

class BuildControl extends Component {
	render () {
		return (
			<div className="BuildControl">
				<div className="Label">{this.props.label}</div>
				<button 
				className="Less" 
				onClick={this.props.removed} 
				disabled={this.props.disabled}>-</button>
				<button 
				className="More" 
				onClick={this.props.added}>+</button>
			</div>
		)
	}
}


export default BuildControl;