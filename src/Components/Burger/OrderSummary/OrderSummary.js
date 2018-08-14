import React, { Component } from 'react';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
	render() {

		const ingredientSummary = Object.keys(this.props.ingredients)
		.map((igKey, index) => {
			return (
			<li key={index}><span style={{ textTransform: 'capitalize' }}>{igKey}: </span>
			{this.props.ingredients[igKey]}</li>
			)
		})

		return (
			<div>
				<h3>Your Order:</h3>
				<p>Delicious burger with the following ingredients:</p>
				<ul>
					{ingredientSummary}
				</ul>
				<p>Continue to Checkout</p>
				<h3><strong>Total = £{this.props.price.toFixed(2)}</strong></h3>
				<div>
				<Button 
				style = {{color: 'red'}}
				clicked={this.props.purchaseCancel}>CANCEL</Button>
				<Button 
				style = {{color: 'green'}}
				clicked={this.props.purchaseContinue}>CONTINUE</Button>
				</div>
			</div>
		)
	}
}


export default OrderSummary;