import React,{useState} from 'react'

const Toggle = (initialValue=true) => {

    const [toggle,isToggle]=useState(initialValue);

    const updateToggle=()=>{
        isToggle(!toggle)
    }

  return [toggle,updateToggle]
}

export default Toggle