import React,{useState} from 'react'


const StopWatch = () => {

    const [seconds,setSeconds]=useState(0)

    const startTimer=()=>{
        setInterval(()=>{
            setSeconds(prevSeconds=> prevSeconds + .01)
        },10)
    }

    const stopTimer=()=>{
        
    }

  return (

    <div>
        
        <p> Timer : {seconds.toFixed(2)}</p>

        <button onClick={startTimer}> Start </button>

        <button onClick={stopTimer}> Stop </button>

    </div>

  )
}

export default StopWatch