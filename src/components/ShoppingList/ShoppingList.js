import Form from "../Form/Form";
import Product from "../Products/Product";
import React,{useState} from 'react'

const ShoppingList = (product) => {

        const initialProducts=[
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
            },
            {
                name:"teddy",
                image_URL:"data:image/jpeg;base64,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",
                price: 250
            }
        ]

        const [products,setProducts]=useState(initialProducts);

        const addProduct=(producte)=>{

            return setProducts([...products,product])

        }

  return (
    <div>


        <Form addProduct={addProduct}/>


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