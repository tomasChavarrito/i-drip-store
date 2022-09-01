import ItemCount from '../ItemCount'
import React from 'react'

export const ItemListContainer=(texto)=>{

    // const onAdd = (quantity) => {
    //     console.log('Compraste ${quantity} unidades')
    // }

    return(
        <>
        <ItemCount initial={1} stock={10}/>
        </>
    )
}

export default ItemListContainer;
