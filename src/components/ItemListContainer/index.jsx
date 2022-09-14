import ItemCount from '../ItemCount'
import ItemList from '../ItemList/itemlist'
import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

const celulares = [
    {id: 1,
     image: "./iphone13.png",
     title: "Iphone 13",
     marca: "Apple",
     stock:"10",
     precio: "u$d 1000",
     category:'apple'},

    {id: 2,
     image: "./IPH14.jpg",
     title: "Iphone 14 - Proximamente",
     marca: "Iphone",
     stock: "10",
     precio: "u$d 1400",
     category:'apple'},

    {id: 3,
     image: "./samsungS22.jpg",
     title: "Samsung S22 Ultra",
     marca: "Samsung",
     stock:"10",
     precio: " u$d 990",
     category:'samsung'},


    {id: 4,
     image: "./motoG200.jpg",
     title: "Moto G200",
     marca:"Motorola", 
     stock:"10",
     precio: "u$d 600",
     category:'motorola'}
]

export const ItemListContainer=(texto)=>{
    
 const [data, setData] = useState([]);

 const { categoriaId } = useParams();

 useEffect (() => {
    const getData = new Promise( resolve => {
        setTimeout(() => {
            resolve(celulares)
        }, 2000);
    });
    if (categoriaId) {
        getData.then(res => setData(res.filter(celulares => celulares.category ===  categoriaId)));
    } else {
        getData.then (res => setData(res));
    }

 }, [categoriaId])

 const onAdd = (quantity) => {
        alert(`Compraste ${quantity} unidades`)
    }

    return(
        <>
        <ItemList />
        <ItemList data={data} />
                <ItemCount initial={1} stock={10}/>
</>
    );
}

export default ItemListContainer;
