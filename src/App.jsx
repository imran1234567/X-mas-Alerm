import React, {Component} from 'react';
import './App.css';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      deadline: 'December 25, 2017',
      newDeadline: ''
    }
  }

  changeDeadline(){
    this.setState({deadline:this.state.newDeadline})
  }

  render(){
  return(
  <div className="App">
    <div className="App-title">Countdown to {this.state.deadline}</div>
    <div>
      <div className="Clock-days">14 Days</div>
      <div className="Clock-hours">30 Hours</div>
      <div className="Clock-minutes">15 Minutes</div>
      <div className="Clock-seconds">20 Seconds</div>
    </div>

    <div>
    <input
    placeholder='new date'
    onChange={event=>this.setState({newDeadline:event.target.value})}
    />
    <button onClick={()=>this.changeDeadline()}>
    Submit
    </button>
    </div>
  </div>
  )
  }
}

export default App;
