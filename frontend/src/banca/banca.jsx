import React, { Component } from 'react'
import PageHeader from '../template/pageHeader'
import BancaForm from './bancaForm'
import BancaList from './bancaList'
import Axios from 'axios'

const URL = 'http://localhost:3003/api/bancas'

export default class Banca extends Component {
	constructor(props) {
		super(props);
		this.refresh()
		this.state = { title: '', subtitulo: '', valor: '', list: [] }
		this.handleAdd = this.handleAdd.bind(this)
		this.handleChange = this.handleChange.bind(this)
		this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
		this.handleMarkAsPending = this.handleMarkAsPending.bind(this)
		this.handleSearch = this.handleSearch.bind(this)
		this.handleClear = this.handleClear.bind(this)
	}

	refresh(title = '', subtitulo = '', valor = ''){
		const search = title ? `&title__regex=/${title}/` : ''
		Axios.get(`${URL}?sort=-createAt${search}`).then(resp => this.setState({...this.state, title, subtitulo, valor, list: resp.data}))
	}

	handleChange(e){
		this.setState({...this.state, [e.target.id]: e.target.value})
	}
	handleClear(){
		this.refresh()
	}
	handleAdd(){
		const title = this.state.title
		const subtitulo = this.state.subtitulo
		const valor = this.state.valor
		Axios.post(URL, { title: title, subtitulo: subtitulo, valor: valor }).then(resp => this.refresh())
	}
	handleSearch(){
		this.refresh(this.state.title)
	}
	handleMarkAsDone(todo){
		Axios.put(`${URL}/${todo._id}`, {...todo, done: true}).then(resp => this.refresh())
	}
	handleMarkAsPending(todo){
		Axios.put(`${URL}/${todo._id}`, {...todo, done: false}).then(resp => this.refresh())
	}

	render(){
		return (
			<div>
				<PageHeader name='Banca' small='Cadastro' />
				<BancaForm
					title = {this.state.title}
					subtitulo = {this.state.subtitulo}
					valor = {this.state.valor}
					handleChange = {this.handleChange}
					handleAdd = {this.handleAdd}
					handleClear = {this.handleClear}
					handleSearch = {this.handleSearch} />
				<BancaList
					list = {this.state.list}
					handleMarkAsDone = {this.handleMarkAsDone}
					handleMarkAsPending = {this.handleMarkAsPending} />
			</div>
		)
	}
}
