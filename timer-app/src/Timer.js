import React,{ Component, useState } from 'react'
import ding from './Audio/ding.mp3'
import DisplayComponent from './DisplayComponent';

let timestart = 0;
let timeoutGlobe = 0;
class Timer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            times: null,
            ended: null,
            loops: 100,
            timeout: null,
            mode: 1

        }
        this.audio = new Audio(ding);
        //this.timerUp = this.timerUp.bind(this);
    }
  
    startTimer = (startTime) => {

       this.myInterval = setInterval(this.timerUp, 10)
       this.setState({
           ended: 2
       })
    }

    timerUp = () =>{
        if(this.state.mode === 0){
            if(this.state.times === 1){
                this.setState({
                    times: 0,
                    loops: this.state.loops - 1,
                    mode: 1
                })
                clearInterval(this.myInterval);
                this.audio.play();
                if(this.state.loops === 0){
                    this.setState({
                        ended: 1
                    })
                }
                if(this.state.loops > 0){
                    this.setState({
                        times: timestart
                    })
                    this.startTimer(timeoutGlobe)
                }
                
                
            }
            else{
                this.setState({
                    times: this.state.times -1
                })
            }
        }
        if(this.state.mode === 1){
            if(this.state.timeout === 1){
                this.setState({
                    timeout: timeoutGlobe,
                    mode: 0
                })
                clearInterval(this.myInterval);
                this.audio.play();
                this.startTimer(timestart)
            }
            else{
                this.setState({
                    timeout: this.state.timeout -1
                })
            }
        }
        
    }


    stopTimer = () => {
        
        clearInterval(this.myInterval);
        this.setState({
            times: this.state.times,
            mode: 3
        })
    }

    resetTimer = () => {
        this.setState({
            mode: 1,
            timeout: timeoutGlobe,
            times: timestart,
            ended: 0
        })
    }

    handleSubmit =(event) => {
        this.setState({
            times: event.target.value*100
        })
        timestart = event.target.value*100

    }
    handleSubmitLoops =(event) => {
        this.setState({
            loops: event.target.value*100
        })

    }
    handleSubmitTimout =(event) => {
        this.setState({
            timeout: event.target.value*100
        })
        timeoutGlobe = event.target.value*100

    }
    render() {
        return(
            <div>
                <h5>Loops:</h5>
                <form onSubmit={this.handleSubmitLoops}>
                    <p><input type='number' placeholder='0' loops='loops' onChange={this.handleSubmitLoops}/> </p>
                </form>
                <h3>Timout:</h3>
                <form onSubmit={this.handleSubmitTimout}>
                    <p><input type='number' placeholder='0' timeout='timeout' onChange={this.handleSubmitTimout}/> </p>
                </form>
                
                <h3>Timer Length in seconds:</h3>
                <form onSubmit={this.handleSubmit}>
                    <p><input type='number' placeholder='0' times='times' onChange={this.handleSubmit}/> </p>
                </form>
                <DisplayComponent time={this.state.mode === 1 ? this.state.timeout : this.state.times}/>
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