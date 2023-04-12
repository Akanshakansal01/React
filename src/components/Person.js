// first letter of component must be in Capital letter.
import React from 'react'
import './Person.css'

const Person = () => {
  return (
    <div style={{color:"brown",padding:"20px"}} className='person'>
        
        
        <p> Name : John Doe </p>
        <p> Age : 23 </p>
        <p> Location : New Delhi </p>
        
        
        
    </div>

  )
}

export default Person