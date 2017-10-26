import React, {Component} from 'react'

export default class Grid extends Component {

	toCssClasses(numbers) {
		const cols = numbers ? numbers.split(' ') : [] //Se passou algum parametro, transforma os valores em array, senao o array é vazio
		let classes = '' // variavel classes por enquanto é só uma string vazia

		if(cols[0]) classes += `col-xs-${cols[0]}` //se existe somente um valor de array a variavel classes é essa
		if(cols[1]) classes += ` col-sm-${cols[1]}` //se existe dois valores de array a variavel classes é essa, e assim sucessivamente
		if(cols[2]) classes += ` col-md-${cols[2]}`
		if(cols[3]) classes += ` col-lg-${cols[3]}`

		return classes
	}
	render(){
		const gridClasses = this.toCssClasses(this.props.cols || 12) //variavel q recebe o valor passado por 'COLS'
		return (
			//component da div que encapsula o resto do template de todoForm
			<div className={gridClasses}>
				{this.props.children}
			</div>
		)
	}
}