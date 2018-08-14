import React, { Component } from 'react';
import Burger from '../../Components/Burger/Burger';
import BuildControls from '../../Components/Burger/BuildControls/BuildControls';
import Modal from '../../Components/UI/Modal/Modal'
import OrderSummary from '../../Components/Burger/OrderSummary/OrderSummary'

const INGREDIENT_PRICES = {
	salad: 0.54,
	cheese: 0.93,
	meat: 1.10,
	bacon: 1.03
}


class BurgerBuilder extends Component {
	
	state = {
		ingredients: {
			salad: 0,
			bacon: 0,
			cheese: 0,
			meat: 0,
		},
		totalPrice: 2.00,
		purchasable: false,
		orderNow: false,
	}

	updateOrderNow = () => {
		this.setState({orderNow: true})
	}

	updatePurchase = () => {
		const ingredients = {
			...this.state.ingredients
		};
		let sum = Object.keys(ingredients)
		.map(igKey => (
			ingredients[igKey]
		))
		.reduce((sum, el) => (
			sum + el
		), 0);
		this.setState({purchasable: sum > 0})
	}

	addIngredient = (type) => {
		const oldCount = this.state.ingredients[type];
		const updated = oldCount + 1;
		const updatedIngredients = {
			...this.state.ingredients
		}
		updatedIngredients[type] = updated;
		const priceAddition = INGREDIENT_PRICES[type];
		const oldPrice = this.state.totalPrice;
		const newPrice = oldPrice + priceAddition;
		this.setState({totalPrice: newPrice, ingredients: updatedIngredients})
		this.updatePurchase(updatedIngredients);
	}

	removeIngredient = (type) => {
		const oldCount = this.state.ingredients[type];
		if (oldCount <= 0) {
			return;
		}
		const updated = oldCount - 1;
		const updatedIngredients = {
			...this.state.ingredients
		}
		updatedIngredients[type] = updated;
		const priceReduction = INGREDIENT_PRICES[type];
		const oldPrice = this.state.totalPrice;
		const newPrice = oldPrice - priceReduction;
		this.setState({totalPrice: newPrice, ingredients: updatedIngredients})
		this.updatePurchase(updatedIngredients);
	}

	purchaseCancel = () => {
		this.setState({orderNow: false})
	}

	purchaseContinueHandler = () => {
		alert('You Continue!');
	}

	render () {

		const disabledInfo = {
			...this.state.ingredients,
		}

		for (let key in disabledInfo) {
			disabledInfo[key] = disabledInfo[key] <= 0;
		};

		return (
			<div>
				<Modal 
				show={this.state.orderNow}
				modalClosed = {this.purchaseCancel}>
					<OrderSummary 
					ingredients={this.state.ingredients} 
					purchaseCancel = {this.purchaseCancel}
					purchaseContinue = {this.purchaseContinueHandler}
					price = {this.state.totalPrice}
					/>
				</Modal>
				<Burger ingredients={this.state.ingredients}/>
				<BuildControls 
				ingredientAdded = {this.addIngredient}
				ingredientRemoved = {this.removeIngredient}
				disabled = {disabledInfo}
				price={this.state.totalPrice}
				purchasable = {this.state.purchasable}
				orderNow = {this.updateOrderNow}
				/>
			</div>
		)
	}
}


export default BurgerBuilder;
