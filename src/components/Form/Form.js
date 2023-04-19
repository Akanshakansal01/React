import React from 'react'

const Form = () => {
  return (
    
    <form>

        <div>

            <label htmlFor='name'>Product Name</label>
            <input type='text' id='product' placeholder='name'></input>

        </div>

        <div>

            <label htmlFor='name'>Price</label>
            <input type='number' id='price' placeholder='price'></input>

        </div>

        <div>

            <label htmlFor='name'>Image Url</label>
            <input type='text' id='image' placeholder='image'></input>

        </div>

    </form>
    
  )
}

export default Form