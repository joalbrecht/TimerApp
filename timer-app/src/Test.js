import React,{ useState } from 'react'
import ding from './Audio/ding.mp3'

function Test(props) {
    
    const audio = new Audio(ding);
    const [time,countDown] = useState(props.time);
    const [ended,endIt] = useState(0);
    let myInterval;

 
    const start = () => {
        endIt(0);
        myInterval = setInterval(decrementCount,1000);
        

    }
    
    let times = props.time;
    const decrementCount = () =>{
        if(times === 1) {
            countDown(0);
            stop();
            audio.play();
            endIt(1);
            
        }
        else{
            countDown(prevState => prevState-1)
            endIt(2);
        }
        times--;
    }


  

   
    const stop = () => {
        clearInterval(myInterval);
    }
    const reset = () => {
        clearInterval(myInterval);
        endIt(0);
        countDown(props.time)
    }

   
   
    
        return(
            <div>          
                <h1>Current Timer(s): {time} </h1>
                <button onClick = {start}> Start  </button>
                <button onClick = {stop}> Stop  </button>
                <button onClick = {reset}> Reset  </button>
                {ended === 1 ?  <h2>It's Over!</h2> : ended === 2 ? <h2>Running</h2> : ''}
     

            </div>
        )

}

export default Test