import "./item.css";
import React from 'react';
import {Phone} from '../pages/Props'

const Item = ({datos}) => {
    return (
        <Phone 
            image={datos.image}
            name={datos.title}
            marca={datos.marca}
            stock={datos.stock}
            precio={datos.precio}
            />
    )
}

export default Item;