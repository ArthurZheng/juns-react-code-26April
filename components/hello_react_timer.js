import React from 'react';


export default class HelloReactTimer extends React.Component{
  constructor(){
    super()
  }

  render(){
    return (
      <div>
        <hr />
        <h2>Hello React Timer</h2>
        <input type='text' placeholder='your name here' />
        <p>Time: {this.props.timer.toTimeString()}</p>
      </div>
    )
  }
}
