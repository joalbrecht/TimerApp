import React,{ Component, useState } from 'react'
import ding from './Audio/ding.mp3'

let timestart = 0;
class Timer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            times: null,
            ended: false,
            loops: false,
            timeout: false
        }
        this.audio = new Audio(ding);
        //this.timerUp = this.timerUp.bind(this);
    }
  
    startTimer = (startTime) => {

       this.myInterval = setInterval(this.timerUp, 1000)
    }

    timerUp = () =>{ 
        if(this.state.times === 1){
            this.setState({
                times: 0,
                loops: this.state.loops - 1
            })
            clearInterval(this.myInterval);
            this.audio.play();
            if(this.state.loops > 0){
                this.setState({
                    times: timestart
                })
                this.startTimer(timestart)
            }
            
            
        }
        else{
            this.setState({
                times: this.state.times -1
            })
        }
    }

    stopTimer = () => {
        
        clearInterval(this.myInterval);
        this.setState({
            times: this.state.times
        })
    }

    resetTimer = () => {
        this.setState({
            times: 10,
            ended: false
        })
    }

    handleSubmit =(event) => {
        this.setState({
            times: event.target.value
        })
        timestart = event.target.value

    }
    handleSubmitLoops =(event) => {
        this.setState({
            loops: event.target.value
        })

    }
    handleSubmitTimout =(event) => {
        this.setState({
            timeout: event.target.value
        })

    }
    render() {
        return(
            <div>
                <h1>Timout:</h1>
                <form onSubmit={this.handleSubmitTimout}>
                    <p><input type='number' placeholder='0' timeout='timeout' onChange={this.handleSubmitTimout}/> </p>
                </form>
                <h1>Loops:</h1>
                <form onSubmit={this.handleSubmitLoops}>
                    <p><input type='number' placeholder='0' loops='loops' onChange={this.handleSubmitLoops}/> </p>
                </form>
                <h1>Timer Length in seconds:</h1>
                <form onSubmit={this.handleSubmit}>
                    <p><input type='number' placeholder='0' times='times' onChange={this.handleSubmit}/> </p>
                </form>
                <h1>Loops: {this.state.loops}, Timeout(s): {this.state.timeout}, Current Timer(s): {this.state.times}</h1>
                {this.state.ended === true ? <h2>timer has ended</h2> : ''}
                <button onClick = {this.startTimer}> Start  </button>
                <button onClick = {this.stopTimer}> Stop  </button>
                <button onClick = {this.resetTimer}> Reset </button>

            </div>
        )
    }
    componentDidMount() {
    }
}

export default Timer