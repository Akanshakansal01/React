import React,{useState} from 'react'
import './Product.css'

const Product = (props) => {

    const [price,setPrice]=useState(props.price)
    // let price=props.price;
    const priceChangeHandler=()=>{
        // price=100;
        // console.log(price);
        setPrice(100)

    }
    const [quantity=0,increase]=useState(props.quantity)
    const increaseitemHandler=()=>{
      increase(quantity+1);
    }
  return (
    <figure className='product' onClick={priceChangeHandler} style={{width:"200px", border:"2px solid black"}}>
        
        <img style={{width:"150px"}} src={props.image} alt={props.name}></img>
        <p> Name: {props.name} </p>
        <h2> Price : {price}</h2>
        <button onClick={increaseitemHandler}>+</button>
        <h3>quantity={quantity}</h3>

        {/* <p> Name:{props.name}</p>
        <p> Image:{props.image}</p>
        <p> Price:{props.price}</p> */}

    </figure>
  )
}

export default Product