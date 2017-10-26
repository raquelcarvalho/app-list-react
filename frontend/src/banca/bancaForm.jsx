import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'


export default props => {
	const keyHandler = (e) => {
		if(e.key === 'Enter'){
			e.shiftKey ? props.handleSearch() : props.handleAdd()
		}else if(e.key === 'Escape'){
			props.handleClear()
		}
	}
	return(
		<div role='form' className='bancaForm'>
			<Grid cols='12 9 9'>
				<input 
					id='title' 
					className='form-control' 
					placeholder='Adicione um titulo'
					onKeyUp={keyHandler}
					onChange={props.handleChange}
					value={props.title} />
				<input 
					id='subtitulo' 
					className='form-control' 
					placeholder='Adicione um sub-titulo'
					onKeyUp={keyHandler}
					onChange={props.handleChange}
					value={props.subtitulo} />
				<input 
					id='valor' 
					className='form-control' 
					placeholder='Adicione um valor'
					onKeyUp={keyHandler}
					onChange={props.handleChange}
					value={props.valor} />
			</Grid>
			<Grid cols='12 3 3'>
				<IconButton 
					style='primary' 
					icon='plus'
					onClick={props.handleAdd} />
				<IconButton 
					style='info' 
					icon='search'
					onClick={props.handleSearch} />
				<IconButton 
					style='default' 
					icon='close'
					onClick={props.handleClear} />

			</Grid>
		</div>
	)
}