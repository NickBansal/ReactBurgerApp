import React, { Component } from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import './Burger.css';

class Burger extends Component {
	
	render() {
		
		let transformedIngredients = Object.keys(this.props.ingredients)

		.map(igKey => (
			burgerIngredients(this.props.ingredients[igKey], igKey)
		))
		.reduce((arr, el) => {
			return arr.concat(el);
		}, []);

		if (transformedIngredients.length === 0) {
			transformedIngredients = <p>Please add ingredients</p>
		}

		return (
			<div className='Burger'>
				<BurgerIngredient type="bread-top"/>
				{transformedIngredients}
				<BurgerIngredient type="bread-bottom"/>
			</div>
		)
	}
}

function burgerIngredients (numberOfIngredients, type) {
	return [...Array(numberOfIngredients)].map((_, index) => (
				<BurgerIngredient key={type + index} type={type}/>
			))
 }


export default Burger;