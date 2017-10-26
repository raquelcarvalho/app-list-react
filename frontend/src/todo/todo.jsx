import React, { Component } from 'react'
import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'
import Axios from 'axios'

const URL = 'http://localhost:3003/api/todos'

export default class Todo extends Component {
	constructor(props) {
		super(props);
		this.refresh()
		this.state = { description: '', list: [] }
		this.handleAdd = this.handleAdd.bind(this)
		this.handleChange = this.handleChange.bind(this)
		this.handleRemove = this.handleRemove.bind(this)
		this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
		this.handleMarkAsPending = this.handleMarkAsPending.bind(this)
		this.handleSearch = this.handleSearch.bind(this)
		this.handleClear = this.handleClear.bind(this)
	}

	refresh(description = ''){
		const search = description ? `&description__regex=/${description}/` : ''
		Axios.get(`${URL}?sort=-createAt${search}`).then(resp => this.setState({...this.state, description, list: resp.data}))
	}

	handleChange(e){
		this.setState({...this.state, description:e.target.value})
		/*
		Quando acontece o change no campo input ele altera o valor description do json, 
		assim quando é feito o post do valor description ele pegar o valor alterado de description
		*/
	}
	handleClear(){
		this.refresh()
	}
	handleAdd(){
		const description = this.state.description
		Axios.post(URL, {description}).then(resp => this.refresh())
	}
	handleRemove(todo){
		Axios.delete(`${URL}/${todo._id}`).then(resp => this.refresh())
	}
	handleSearch(){
		this.refresh(this.state.description)
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
				<PageHeader name='Tarefas' small='Cadastro' />
				<TodoForm 
					description = {this.state.description}
					handleAdd={this.handleAdd}
					handleChange={this.handleChange}
					handleSearch={this.handleSearch}
					handleClear={this.handleClear} />
				<TodoList
					list={this.state.list}
					handleRemove={this.handleRemove}
					handleMarkAsDone={this.handleMarkAsDone}
					handleMarkAsPending={this.handleMarkAsPending} />
			</div>
		)
	}
}
