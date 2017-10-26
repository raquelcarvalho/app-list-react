import React from 'react'

import IconButton from '../template/iconButton'

export default props => {
	const renderRows = () => {
		const list = props.list || []
			return list.map(banca => (
				<tr key={banca._id}  className={banca.done ? 'markedAsAvaliable' : ''}>
					<td>{banca.title} / <span className='subtitulo'>{banca.subtitulo}</span> / <span className='valor'>{banca.valor}</span></td>
					<td>
						<IconButton 
							style='sucess' 
							icon='check'
							hide={banca.done}
							onClick={() => props.handleMarkAsDone(banca)}>
						</IconButton>
						<IconButton 	
							style='warning' 
							icon='undo'
							hide={!banca.done}
							onClick={() => props.handleMarkAsPending(banca)}>
						</IconButton>
					</td>
				</tr>
			)
		)
	}

	return (
		<table className='table'>
			<thead>
				<tr>
					<th>Filme</th>
					<th className='tableActions'>Ações</th>
				</tr>
			</thead>
			<tbody>
				{renderRows()}
			</tbody>
		</table>
	)
}
