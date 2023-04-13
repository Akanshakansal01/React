import React from 'react'

const Product = (props) => {
  return (
    <figure>
        
        <img src={props.image} alt={props.name}></img>
        <p> Name: {props.name} </p>
        <h2> Price : {props.price}</h2>

        {/* <p> Name:{props.name}</p>
        <p> Image:{props.image}</p>
        <p> Price:{props.price}</p> */}

    </figure>
  )
}

export default Product