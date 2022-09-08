export const Phone = (props) => {
    return (
        <>
        <h2>{props.name}</h2>
        <p>Marca: {props.marca} </p>
        <p>Stock: {props.stock} </p>
        <p>Precio:{props.precio}</p>
        <img src={props.image} alt="" width="500px" height="250"/>
       </>
    )
}