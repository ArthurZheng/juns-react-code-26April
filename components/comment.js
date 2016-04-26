import React from 'react';

const Comment = React.createClass({
  render: function(){
    return (
      <div className='comment'>
        <h2>Author: {this.props.author}</h2>
        <p>Text: {this.props.text}</p>
      </div>
    )
  },
});


export default Comment;
