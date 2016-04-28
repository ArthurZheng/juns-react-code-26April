import React from 'react';
import BaseComponent from './base_component';

export default class ExampleComponent extends BaseComponent{
  constructor(){
    super();
    // instead of doing this._handleClick = this._handleClick.bind(this);
    this._bind('_handleClick', '_handleFoo');
    this.state = {};
  }

  _handleClick(){
    console.log(this); // this is ExampleComponent
  }

  render(){
    return <div onClick={this._handleClick}>Hello World!</div>
  }

}
