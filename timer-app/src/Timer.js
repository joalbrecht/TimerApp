import React,{ Component } from 'react'
import ding from './Audio/ding.mp3'
import DisplayComponent from './DisplayComponent';

let timestart = [0,0];
let timeoutGlobe = [0,0];
class Timer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            miliseconds: 0,
            ended: null,
            loops: 100,
            mode: 1,
            seconds: 0,
            minutes: 0

        }
        this.audio = new Audio(ding);
        //this.timerUp = this.timerUp.bind(this);
    }
  
    startTimer = () => {

       this.myInterval = setInterval(this.timerUp, 10)
       this.setState({
           ended: 2
       })
    }

    timerUp = () =>{

        if(this.state.seconds === 0 && this.state.minutes > 0) {
            this.setState({
                seconds: 59,
                minutes: this.state.minutes -1
            })
        }
        if( this.state.miliseconds === 0 && this.state.seconds > 0){
            this.setState({
                seconds: this.state.seconds -1,
                miliseconds: 100
            })
        }
        if( this.state.miliseconds === 0 && this.state.seconds === 0 && this.state.minutes === 0){
            this.setState({
                miliseconds: 0
            })
            clearInterval(this.myInterval);
            this.audio.play()
            //Distinction of Modes
            if( this.state.mode === 0) {
                this.setState({
                    loops: this.state.loops -1,
                    mode: 1
                })
                if( this.state.loops > 0 ){
                    this.setState({
                        minutes: timeoutGlobe[0],
                        seconds: timeoutGlobe[1]
                    })
                    this.startTimer()
                }
                if(this.state.loops === 0){
                    this.setState({
                        ended: 1
                    })
                }
            }
            else if( this.state.mode === 1) {
                this.setState({
                    mode: 0,
                    minutes: timestart[0],
                    seconds: timestart[1]
                })
                this.startTimer()
            }
        }
        else{
            this.setState({
                miliseconds:this.state.miliseconds -1
            })
        }
        
    }


    stopTimer = () => {
        
        clearInterval(this.myInterval);
        this.setState({
            miliseconds: this.state.miliseconds,
            mode: 3
        })
    }

    resetTimer = () => {
        this.setState({
            mode: 1,
            minutes: timeoutGlobe[0],
            seconds: timeoutGlobe[1],
            miliseconds: 0,
            ended: 0
        })
    }

    handleSubmit1 =(event) => {
        
        timestart[0] = event.target.value

    }
    handleSubmit2 =(event) => {
        
        timestart[1] = event.target.value

    }
   
    handleSubmitLoops =(event) => {
        this.setState({
            loops: event.target.value
        })

    }
    handleSubmitTimout1 =(event) => {
        this.setState({
            minutes: event.target.value
        })
        timeoutGlobe[0] = event.target.value

    }
    handleSubmitTimout2 =(event) => {
        this.setState({
            seconds: event.target.value
        })
        timeoutGlobe[1] = event.target.value

    }
    
    stretch = ()=>{
        timestart= [0,30]
        timeoutGlobe = [0,5]
        this.setState({
            loops:7
        })
    }

    pomodoro = ()=>{
        timestart= [25,0]
        timeoutGlobe = [5,0]
        this.setState({
            loops:3
        })
    }

    render() {
        return(
            <div className="main-section">
                <div className="clock-holder">
                    <div className="stopwatch">
                <p><button onClick={this.stretch}> Stretching</button>
                <button onClick={this.pomodoro}> Pomodoro</button></p>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <DisplayComponent minutes={this.state.minutes} seconds={this.state.seconds} time={this.state.miliseconds}/>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick = {this.startTimer}> Start  </button>
                <button onClick = {this.stopTimer}> Stop  </button>
                <button onClick = {this.resetTimer}> Reset </button>
                <div>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <p>Current settings:</p>
                <p>Loops: {this.state.loops}, Timeout(s): {timeoutGlobe[0]}:{timeoutGlobe[1]>= 10 ? timeoutGlobe[1] : "0"+timeoutGlobe[1] }, Timer Length: {timestart[0]}:{timestart[1]>= 10 ? timestart[1] : "0"+timestart[1]}
                </p>
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <h3>Customize:</h3>
                <h5>Loops:</h5>
                <form onSubmit={this.handleSubmitLoops}>
                    <p><input type='number' placeholder='0' loops='loops' onChange={this.handleSubmitLoops}/> </p>
                </form>
                <h5>Timout:</h5>
                <form onSubmit={this.handleSubmitTimout}>
                    <p><input type='number' placeholder='0' timeout='timeout' onChange={this.handleSubmitTimout1}/>:
                    <input type='number' placeholder='0' timeout='timeout' onChange={this.handleSubmitTimout2}/>
                    </p>
                </form>
                
                <h5>Timer Length:</h5>
                <form onSubmit={this.handleSubmit}>
                    <p> 
                        <input type='number' placeholder='0' minutes='minutes' onChange={this.handleSubmit1}/>:   
                        <input type='number' placeholder='0' seconds='seconds' onChange={this.handleSubmit2}/> </p>
                    
                </form>
                </div>
                
     </div>
    </div>
        )
    }
    componentDidMount() {
    }
}

export default Timer


/*<div>
                <h3>Timout:</h3>
                <form onSubmit={this.handleSubmitTimout}>
                    <p><input type='number' placeholder='0' timeout='timeout' onChange={this.handleSubmitTimout}/> </p>
                </form>
                
                <h3>Timer Length in seconds:</h3>
                <form onSubmit={this.handleSubmit}>
                    <p><input type='number' placeholder='0' times='times' onChange={this.handleSubmit}/> </p>
                </form>
                <h3>Loops: {this.state.loops}, Timeout(s): {timeoutGlobe}, Timer Length: {timestart}</h3>
                {this.state.mode === 0 ? <h3>Current Timer(s): {this.state.times}</h3> : <h3>Current Timer(s): {this.state.timeout}</h3>}
                {this.state.ended === 1 ?  <h3>It's Over!</h3> : this.state.ended === 2 ? <h3>Running</h3> : ''}
                <button onClick = {this.startTimer}> Start  </button>
                <button onClick = {this.stopTimer}> Stop  </button>
                <button onClick = {this.resetTimer}> Reset </button>
                <h5>Loops:</h5>
                <form onSubmit={this.handleSubmitLoops}>
                    <p><input type='number' placeholder='0' loops='loops' onChange={this.handleSubmitLoops}/> </p>
                </form>
            </div>
            */