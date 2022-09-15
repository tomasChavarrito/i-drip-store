export const Phone = (props) => {
    return (
        <>
        <h2>{props.name}</h2>
        <p>{props.marca} </p>
        <p>{props.stock} </p>
        <p>{props.precio}</p>
        <img src={props.image} alt="" width="500px" height="250"/>
       </>
    )
}