import React, {PropTypes} from 'react';

class CounterES6 extends React.Component{
  constructor(props){
    super(props);
    this.state = ({
      counter: props.initialCount
    })
  }

  incrementCounter(){
    this.setState({counter: this.state.counter + 5})
    console.log('incrementCounter this is ', JSON.stringify(this, null, 4));
  }
  render(){
    return (
      <div onClick={() => this.incrementCounter()}>
        <hr />
        <h2>Counter with ES6 Class</h2>
        <p>Counter is {this.state.counter}</p>
      </div>
    )
  }

};

CounterES6.propTypes = {
  initialCount: React.PropTypes.number.isRequired
};

CounterES6.defaultProps = {
  initialCount: -1
};

export default CounterES6;
