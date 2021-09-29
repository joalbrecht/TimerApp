import React,{ useState } from "react";
import Test from './Test'

function TimerCreator(props){
    const [loops,setLoops] = useState(0);
    const [time,setTime] = useState(0);
    
    const handleSubmitLoops =(event) => {
        event.preventDefault()
        setLoops(event.target.value)

    }
    const handleSubmitTime =(event) => {
        event.preventDefault()
        setTime(event.target.value)
        return(
            <div>
                <Test time={time}/>
            </div>
        )
    }

   const handleSubmit =(event) => {
        event.preventDefault()
        setTime(event.target.value)
        
        
    }

        return(
            <div>
                <form onSubmit={handleSubmit}>
                    <p><input type='number' placeholder='Loops' loops='loops' onChange={handleSubmitLoops}/> </p>
                    <p><input type='number' placeholder='Time' time='time' onChange={handleSubmitTime}/> </p>
                </form>
                <Test time={time}/>
                <h3>Loops: {loops}, Time: {time}</h3>
                
            </div>
        )
    }


export default TimerCreator