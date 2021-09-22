import React, {Component} from 'react'
import './App.css';
import Timer from './Timer'
import TimerCreator from './TimerCreator';
import Test from './Test'


class App extends Component {
  render(){
    return(
      <div className='TimerApp'>
        <Timer/>
      </div>
    )
  }
}

export default App;
