import React from 'react';

export default class ShoppingCart extends React.Component{
  constructor(){
    super()
  }

  render(){
    return (
      <div>
        <hr />
        <h2>Juns Shopping Cart Details</h2>
        <p>Quantity is: {this.props.quantity}</p>
        <p>Original toal is: {this.props.total}</p>
        <button onClick={this.props.handleClick}>Test handleClick</button>
        <button onClick={this.props.increaseQuantity}>Increase Quantity</button>
        <button onClick={this.props.decreaseQuantity}>Decrease Quantity</button>
      </div>
    )
  }
}
