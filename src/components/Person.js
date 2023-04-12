// first letter of component must be in Capital letter.
import React from 'react'
import './Person.css'

const Person = () => {

    let luckyNumber=7;
    let randomNumber= Math.floor(Math.random()*10)

  return (
    <div style={{color:"brown",padding:"20px"}} className='person'>
        {
            (randomNumber === luckyNumber) ? <div>
            <p> Name : Akansha Kansal </p>
            <p> Age : 20 </p>
            <p> Location : Muzaffarnagar, U.P. </p>
            <img style={{width: "180px"}} 
            src='https://www.shutterstock.com/image-vector/winners-team-happy-people-win-260nw-1562183173.jpg' alt=''></img>
            <p> My Number is : {randomNumber} </p>
            </div>  : <p> You didn't win 😔</p>
        }
        
        {/* <p> Name : Akansha Kansal </p>
        <p> Age : 20 </p>
        <p> Location : Muzaffarnagar, U.P. </p>
        
        <p> My Number is : {randomNumber} </p>
         */}
    </div>

  )
}

export default Person