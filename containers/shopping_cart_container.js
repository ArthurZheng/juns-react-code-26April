import React from 'react';
import ShoppingCart from '../components/shopping_cart';

class ShoppingCartContainer extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      price: 60,
      quantity: 5,
      total: 0
    }
    // this.handleClick = () => this.handleClick();
    this.handleClick = this.handleClick.bind(this); // using Function.prototype.bind();
    this.decreaseQuantity = this.decreaseQuantity.bind(this);
    this.increaseQuantity = this.increaseQuantity.bind(this);
  }

  increaseQuantity(){
    this.setState({quantity: this.state.quantity + 1})
    this.calculateTotal();
  }

  decreaseQuantity(){
    let newQuantity = this.state.quantity > 0 ? this.state.quantity : 0;
    this.setState({quantity: newQuantity <= 0 ? 0 : newQuantity - 1})
    this.calculateTotal();
  }

  calculateTotal(){
    this.setState({total: this.state.quantity * this.state.price});
    let newTotal = this.state.total;
    console.log('now total is ', newTotal);
  }

  componentWillMount(){
    this.calculateTotal();
  }

  handleClick(){
    console.log('handleClick triggered. this is ', this.toString());
    // console.log('this is ',  JSON.stringify(this, null, 4));
  }


  render(){
    return (
      <ShoppingCart
        increaseQuantity={this.increaseQuantity}
        decreaseQuantity={this.decreaseQuantity}
        handleClick={this.handleClick}
        quantity={this.state.quantity}
        total={this.state.total}
      />
    )
  }
}

ShoppingCartContainer.propTypes = {
  title: React.PropTypes.string.isRequired,
  quantity: React.PropTypes.number.isRequired,
  price: React.PropTypes.number.isRequired,
  total: React.PropTypes.number.isRequired
};

ShoppingCartContainer.defaultProps = {
  title: 'Default Title',
  price: 8888,
  quantity: 11,
  total: -1
};

export default ShoppingCartContainer;
