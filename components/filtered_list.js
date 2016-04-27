import React from 'react';

import List from './filtered_list_item';

const FilteredList = React.createClass({
  getInitialState: function(){
    return {
      initial_list_items: [
        'Apples',
        'Pears',
        'Broccoli',
        'Peach',
        'Watermelon'
      ],
      items: []
    }
  },

  filterList: function(e){
    let updatedList = this.state.initial_list_items;
    updatedList = updatedList.filter((item) => {
      return item.toLowerCase().search(e.target.value.toLowerCase()) !== -1;
    });
    this.setState({items: updatedList});
  },

  componentWillMount: function(){
    this.setState({items: this.state.initial_list_items})
  },

  render: function(){
    return (
      <div className='filter-list'>
        <input type='text' placeholder='Search' onChange={this.filterList} />
        <List list_items={this.state.items} />
      </div>
    )
  }
});

export default FilteredList;
