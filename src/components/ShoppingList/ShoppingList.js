import Product from "../Products/Product";
import React from 'react'

const ShoppingList = (product) => {

        const products=[
            {
                name:"iphone 11",
                image_URL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZbfE6B9-PCaRFHDXUtFquGzFQmflYg9AtCA&usqp=CAU",
                price: 22400
            },
            {
                name:"pen",
                image_URL:"https://www.shutterstock.com/image-photo/metal-pen-isolated-on-white-260nw-525053431.jpg",
                price: 22
            },
            {
                name:"bike",
                image_URL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_WWQ3es46R7K9jnhPFhKwU1w6c9T11lxP_w&usqp=CAU",
                price: 2240
            }
        ]

  return (
    <div>

        {
            products.map((product)=>{
                return <Product name={product.name} price={product.price} image={product.image_URL}/>
            })
        }

        {/* <Product name="pen" image={<img src="https://www.shutterstock.com/image-photo/metal-pen-isolated-on-white-260nw-525053431.jpg"></img>} price="50"/>
        <Product name="bike" image={<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_WWQ3es46R7K9jnhPFhKwU1w6c9T11lxP_w&usqp=CAU"></img>} price="30000"/>
        <Product name="iphone" image={<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZbfE6B9-PCaRFHDXUtFquGzFQmflYg9AtCA&usqp=CAU"></img>} price="50000"/> */}

    </div>
  )
}

export default ShoppingList