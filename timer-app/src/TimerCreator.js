import React,{ Component } from "react";
import Timer from './Timer'

class TimerCreator extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loops: 10,
            times: 0
        }
    }
    handleSubmitLoops =(event) => {
        this.setState({
            loops: event.target.value
        })

    }
    handleSubmitTime =(event) => {
        this.setState({
            times: event.target.value
        })

    }

    render() {
        return(
            <div>
                <h2>Loops: </h2>
                <form onSubmit={this.handleSubmitLoops}>
                    <p><input type='number' placeholder='0' loops='loops' onChange={this.handleSubmitLoops}/> </p>
                </form>
                <h2>Timer Length in seconds:</h2>
                <form onSubmit={this.handleSubmitTime}>
                    <p><input type='number' placeholder='0' times='times' onChange={this.handleSubmitTime}/> </p>
                </form>
                <h3>Loops: {this.state.loops}, Time: {this.state.times}</h3>
            </div>
        )
    }

    componentDidMount(){

    }
}

export default TimerCreator