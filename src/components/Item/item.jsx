import "./item.css";
import React from 'react';
import {Phone} from '../pages/Props'
import {Link} from 'react-router-dom'

const Item = ({datos}) => {
    return (
        <Link to={`/detalle/${datos.id}`} className="celulares">
         <Phone 
               image={datos.image}
               name={datos.title}
               /* marca={datos.marca}
               stock={datos.stock}
               precio={datos.precio}  */
               />
        </Link>
    )
}

export default Item;