import React,{memo} from 'react'
//MEMO CUANDO CAMBIA ESPECIFICAMENTE UN COMPONENTE Y EVITAR Q SE REDIBUJE TODO
export const Small = memo(({value}) => {
	console.log('me llame');
	return (
		<small>
			{value}
		</small>
	)
})
