import React from 'react'
import ItemCount from '../ItemCount'

const ItemDetail = (data) => {
  return (
    <>
    <img src={data.image} alt="" />
    <div className="ItemDetail">
        <p>{data.name}</p>
        <p>{data.marca} </p>
        <p>{data.stock} </p>
        <p>{data.precio}</p>
    </div>
    <ItemCount />
    </>
  )
}

export default ItemDetail