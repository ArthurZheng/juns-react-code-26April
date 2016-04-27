import React from 'react';

const List = React.createClass({
  render: function(){
    return (
      <ul>
      {
        this.props.list_items.map( (item) => {
          return <li key={item}>{item}</li>
        })
      }
      </ul>
    )
  }
});

export default List;
