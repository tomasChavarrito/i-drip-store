import ItemCount from '../ItemCount'
import ItemList from '../ItemList/itemlist'
import React, {useState, useEffect} from 'react'

const celulares = [
    {id: 1, image: "./IPH14.jpg", title: "Iphone 14 - Proximamente", marca: "Iphone", stock: "10", precio: "u$d 1400"},
    {id: 2, image: "./samsungS22.jpg", title: "Samsung S22 Ultra", marca: "Samsung", stock:"10", precio: " u$d 990"},
]

export const ItemListContainer=(texto)=>{
    
 const [data, setData] = useState([]);

 useEffect (() => {
    const getData = new Promise( resolve => {
        setTimeout(() => {
            resolve(celulares)
        }, 2000)
    });
    getData.then(res => setData(res));

 }, [])

 const onAdd = (quantity) => {
        alert(`Compraste ${quantity} unidades`)
    }

    return(
        <>
        <ItemCount initial={1} stock={10}/>
        <ItemList />
        <ItemList data={data} />
        </>
    );
}

export default ItemListContainer;
