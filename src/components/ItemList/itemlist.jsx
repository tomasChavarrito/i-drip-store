import Item from "../Item/item";
import React from "react"

const ItemList = ({data=[]}) => {
    return(
       data.map (celulares => <Item key={celulares.id} datos={celulares} />)
    );
}

export default ItemList