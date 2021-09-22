import React,{ Component } from "react";
import Test from './Test'

class TimerCreator extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loops: null,
            time: null
        }
    }

   
 
    handleSubmitLoops =(event) => {
        event.preventDefault()
        this.setState({
            loops: event.target.value,
        })

    }
    handleSubmitTime =(event) => {
        event.preventDefault()
        this.setState({
            time: event.target.value,
        })

    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <p><input type='number' placeholder='Loops' loops='loops' onChange={this.handleSubmitLoops}/> </p>
                    <p><input type='number' placeholder='Time' time='times' onChange={this.handleSubmitTime}/> </p>
                    <p><input type='submit'/> </p>
                </form>
                <h3>Loops: {this.state.loops}, Time: {this.state.time}</h3>
                <Test time={this.state.time} />
            </div>
        )
    }

    componentDidMount(){

    }
}

export default TimerCreator