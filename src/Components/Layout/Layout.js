import React, { Component } from 'react';
import './Layout.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'

class Layout extends Component {
	render() {
		return(
			<div>
				<Toolbar />
				<main className='Content'>
					{this.props.children}
				</main>
			</div>

		)
	}
}

export default Layout;