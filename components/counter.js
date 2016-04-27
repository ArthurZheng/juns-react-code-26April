import React from 'react';

const Counter = React.createClass({
  getInitialState: function(){
      return {
        count: 0
      }
  },

  incrementCount: function(){
    this.setState({
      count: this.state.count + 1
    });
  },
  render: function(){
    return (
      <div className='counter'>
        <h1>Counter Component</h1>
        <h3>Count is {this.state.count}</h3>
        <button onClick={this.incrementCount}>Increase Count</button>
      </div>
    );
  }
});

export default Counter;
