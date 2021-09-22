import React,{ useState } from 'react'
import ding from './Audio/ding.mp3'

function Test(props) {
    
    const audio = new Audio(ding);
    const [time,countDown] = useState(props.time);
    let myInterval;

 
    const start = () => {
        myInterval = setInterval(decrementCount,1000);

    }
    
    let times = props.time;
    const decrementCount = () =>{
        if(times === 1) {
            countDown(0);
            stop();
            audio.play();
            
        }
        else{
            countDown(prevState => prevState-1)
        }
        times--;
    }


  

   
    const stop = () => {
        clearInterval(myInterval);
    }
    const reset = () => {
        clearInterval(myInterval);
        countDown(props.time)
    }

   
   
    
        return(
            <div>          
                <h1>Current Timer(s): {time} </h1>
                <button onClick = {start}> Start  </button>
                <button onClick = {stop}> Stop  </button>
                <button onClick = {reset}> Reset  </button>
     

            </div>
        )

}

export default Test