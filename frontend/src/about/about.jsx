import React, {Component} from 'react'

import PageHeader from '../template/pageHeader'

export default class About extends Component{
	render(){
		return(
			<div>
				<PageHeader name='Sobre' small='mim' />
				Aprendendo React.
			</div>
		)
	}
}